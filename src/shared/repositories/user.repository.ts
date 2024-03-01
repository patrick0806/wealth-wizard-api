import { db } from '@config/database';
import { users } from '@config/database/schema';
import { Injectable } from '@nestjs/common';
import { User } from '@shared/entities/user';
import { randomUUID } from 'crypto';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserRepository {
  constructor() {}
  async findByEmail(email: string): Promise<User> {
    const [userdata] = await db
      .select()
      .from(users)
      .where(eq(users.email, email));
    if (!userdata) {
      return null;
    }
    return new User(userdata);
  }

  async create(name: string, email: string, password: string) {
    const [user] = await db
      .insert(users)
      .values({ id: randomUUID(), name, email, password })
      .returning();
    return new User(user);
  }
}
