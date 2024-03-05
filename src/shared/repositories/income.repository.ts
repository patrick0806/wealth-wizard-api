import { db } from '@config/database';
import { incomes } from '@config/database/schema';
import { Injectable } from '@nestjs/common';
import { Income } from '@shared/entities/income';
import { randomUUID } from 'crypto';

@Injectable()
export class IncomeRepository {
  constructor() {}

  async createIncome(income: Partial<Income>): Promise<Income> {
    const [incomeData] = await db
      .insert(incomes)
      .values({
        id: randomUUID(),
        description: income.description,
        value: income.value.toPrecision(2),
        date: new Date(income.date),
        category: income.category,
        userId: income.userId,
      })
      .returning();
    return new Income(incomeData);
  }
}
