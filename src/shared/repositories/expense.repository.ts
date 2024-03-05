import { db } from '@config/database';
import { expenses } from '@config/database/schema';
import { Injectable } from '@nestjs/common';
import { Expense } from '@shared/entities/expense';
import { Income } from '@shared/entities/income';
import { randomUUID } from 'crypto';

@Injectable()
export class ExpenseRepository {
  constructor() {}

  async createIncome(income: Partial<Income>): Promise<Income> {
    const [expenseData] = await db
      .insert(expenses)
      .values({
        id: randomUUID(),
        description: income.description,
        value: income.value.toPrecision(2),
        date: new Date(income.date),
        category: income.category,
        userId: income.userId,
      })
      .returning();
    return new Expense(expenseData);
  }
}
