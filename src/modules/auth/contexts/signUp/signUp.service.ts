import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { SignUpRequestDTO } from './dtos/request.dto';
import { SignUpResponseDTO } from './dtos/response.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '@shared/repositories/user.repository';
import { AlreadExistsException } from '@shared/exceptions/AlreadyExistException';

@Injectable()
export class SignUpService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async execute(userData: SignUpRequestDTO): Promise<SignUpResponseDTO> {
    const alreadyExists = await this.userRepository.findByEmail(userData.email);

    if (alreadyExists) {
      throw new AlreadExistsException('User already exists');
    }
    userData.password = await hash(userData.password, 10);

    const user = await this.userRepository.create(
      userData.name,
      userData.email,
      userData.password,
    );

    const payload = { name: user.name, email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }
}
