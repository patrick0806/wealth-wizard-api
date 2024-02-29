import { Injectable } from '@nestjs/common';
import { User } from '@shared/entities/user';
import { randomUUID } from 'crypto';

@Injectable()
export class FindUserByEmailService {
  private readonly users = [
    {
      id: randomUUID(),
      name: 'john',
      password: 'changeme',
      email: 'jS9Zs@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: randomUUID(),
      name: 'maria',
      password: 'guess',
      email: 'I0v6A@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async excecute(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
