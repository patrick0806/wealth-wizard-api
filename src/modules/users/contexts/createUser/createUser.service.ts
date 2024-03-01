import { Injectable } from '@nestjs/common';
import { User } from '@shared/entities/user';
import { AlreadExistsException } from '@shared/exceptions/AlreadyExistException';
import { UserRepository } from '@shared/repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}
  async execute(name: string, email: string, password: string): Promise<User> {
    const alreadyExists = await this.userRepository.findByEmail(email);
    if (alreadyExists) {
      throw new AlreadExistsException('User already exists');
    }

    const user = await this.userRepository.create(name, email, password);
    return user;
  }
}
