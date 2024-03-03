import { Test } from '@nestjs/testing';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import { SignUpController } from '../signUp.controller';
import { SignUpService } from '../signUp.service';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from '@shared/repositories/user.repository';
import { mockedUser } from './mocks/repository.mock';
import { bodyParams, expressResponse } from './mocks/params.mock';
import { Response } from 'express';
import { AlreadExistsException } from '@shared/exceptions/AlreadyExistException';

describe('SignUp test suit', async () => {
  let controller: SignUpController;
  let service: SignUpService;
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
      controllers: [SignUpController],
      providers: [
        SignUpService,
        {
          provide: UserRepository,
          useValue: {
            create: vi.fn(),
            findByEmail: vi.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SignUpController>(SignUpController);
    service = module.get<SignUpService>(SignUpService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('Should be define a module with success', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('Should be sign up with success', async () => {
    vi.spyOn(repository, 'findByEmail').mockResolvedValue(null);
    vi.spyOn(repository, 'create').mockResolvedValue(mockedUser);
    await controller.handle(bodyParams, expressResponse as Response);
    expect(repository.findByEmail).toBeCalledWith(bodyParams.email);
    expect(repository.findByEmail).toBeCalledTimes(1);
    expect(repository.create).toBeCalledWith(
      bodyParams.name,
      bodyParams.email,
      bodyParams.password,
    );
    expect(repository.create).toBeCalledTimes(1);

    expect(expressResponse.setHeader).toBeCalled();
    expect(expressResponse.send).toBeCalled();
  });

  it('Should be not sign up because email already exists', async () => {
    vi.spyOn(repository, 'findByEmail').mockResolvedValue(mockedUser);
    vi.spyOn(repository, 'create');
    try {
      await controller.handle(bodyParams, expressResponse as Response);
    } catch (error) {
      expect(repository.findByEmail).toBeCalledWith(bodyParams.email);
      expect(repository.findByEmail).toBeCalledTimes(1);
      expect(repository.create).not.toBeCalled();
      expect(error).toBeInstanceOf(AlreadExistsException);
      expect(error.message).toBe('User already exists');
    }
  });
});
