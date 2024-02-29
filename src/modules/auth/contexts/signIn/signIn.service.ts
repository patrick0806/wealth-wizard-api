import { Injectable, NotFoundException } from '@nestjs/common';
import { FindUserByEmailService } from '@modules/users/contexts/findUserByEmail/findUserByEmail.service';
import { JwtService } from '@nestjs/jwt';
import { SignInResponseDTO } from './dtos/response.dto';

@Injectable()
export class SignInService {
  constructor(
    private findUserByEmail: FindUserByEmailService,
    private jwtService: JwtService,
  ) {}

  async execute(email: string, password: string): Promise<SignInResponseDTO> {
    const user = await this.findUserByEmail.excecute(email);
    if (!user) {
      throw new NotFoundException(); //TODO - My Exception
    }

    if (user.password !== password) {
      throw new Error('Wrong Password'); //TODO - My Exception
    }

    const payload = { name: user.name, email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }
}
