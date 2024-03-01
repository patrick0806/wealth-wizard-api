import { Injectable } from '@nestjs/common';
import { SignUpRequestDTO } from './dtos/request.dto';
import { SignUpResponseDTO } from './dtos/response.dto';
import { CreateUserService } from '@modules/users/contexts/createUser/createUser.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignUpService {
  constructor(
    private createUserService: CreateUserService,
    private jwtService: JwtService,
  ) {}

  async execute(userData: SignUpRequestDTO): Promise<SignUpResponseDTO> {
    const user = await this.createUserService.execute(
      userData.name,
      userData.email,
      userData.password,
    );

    const payload = { name: user.name, email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }
}
