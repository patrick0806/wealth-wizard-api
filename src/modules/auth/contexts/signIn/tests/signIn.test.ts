import { Test } from '@nestjs/testing';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import { SignInController } from '../signIn.controller';
import { SignInService } from '../signIn.service';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from '@shared/repositories/user.repository';
import { mockedUser } from './mocks/repository.mock';
import { bodyParams, expressResponse } from './mocks/params.mock';
import { Response } from 'express';
import { UnauthorizedException } from '@shared/exceptions/UnauthorizedException';

describe('SignIn test suit', async () => {
  let controller: SignInController;
  let service: SignInService;
  let repository: UserRepository;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          global: true,
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      controllers: [SignInController],
      providers: [
        SignInService,
        {
          provide: UserRepository,
          useValue: {
            findByEmail: vi.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SignInController>(SignInController);
    service = module.get<SignInService>(SignInService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('Should be define a module with success', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('Should be sign int with success', async () => {
    vi.spyOn(repository, 'findByEmail').mockResolvedValue(mockedUser);
    await controller.handle(bodyParams, expressResponse as Response);
    expect(repository.findByEmail).toBeCalledWith(bodyParams.email);
    expect(repository.findByEmail).toBeCalledTimes(1);

    expect(expressResponse.setHeader).toBeCalled();
    expect(expressResponse.send).toBeCalled();
  });

  it('Should be not sign up because user dosent exist', async () => {
    vi.spyOn(repository, 'findByEmail').mockResolvedValue(null);
    try {
      await controller.handle(bodyParams, expressResponse as Response);
    } catch (error) {
      expect(repository.findByEmail).toBeCalledWith(bodyParams.email);
      expect(repository.findByEmail).toBeCalledTimes(1);
      expect(error).toBeInstanceOf(UnauthorizedException);
      expect(error.message).toBe('email or password invalid');
    }
  });

  it('Should be not sign in because password is invalid', async () => {
    vi.spyOn(repository, 'findByEmail').mockResolvedValue(mockedUser);
    try {
      await controller.handle(
        { ...bodyParams, password: 'invalid' },
        expressResponse as Response,
      );
    } catch (error) {
      expect(repository.findByEmail).toBeCalledWith(bodyParams.email);
      expect(repository.findByEmail).toBeCalledTimes(1);
      expect(error).toBeInstanceOf(UnauthorizedException);
      expect(error.message).toBe('email or password invalid');
    }
  });
});
