import { Injectable } from '@nestjs/common';
import { User } from '@shared/entities/user';
import { UserRepository } from '@shared/repositories/user.repository';

@Injectable()
export class FindUserByEmailService {
  constructor(private userRepository: UserRepository) {}
  async excecute(email: string): Promise<User | undefined> {
    return this.userRepository.findByEmail(email);
  }
}
