import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from '@shared/entities/expense.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpenseRepository {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  async save(expense: Partial<Expense>): Promise<Expense> {
    const newExpense = await this.expenseRepository.save(expense);
    return newExpense;
  }

  async saveMany(expenses: Partial<Expense>[]): Promise<Expense> {
    const newExpenses = await this.expenseRepository.save(expenses);
    return newExpenses[0];
  }

  async listExpenses(
    page: number = 0,
    size: number = 10,
    month?: number,
    year?: number,
  ) {
    const query = this.expenseRepository
      .createQueryBuilder('ex')
      .orderBy('ex.initialDate', 'DESC')
      .skip(Math.max(0, (page - 1) * size))
      .take(size);

    if (month) {
      query.andWhere('EXTRACT(MONTH FROM ex.initialDate) = :month', {
        month,
      });
    }
    if (year) {
      query.andWhere('EXTRACT(YEAR FROM ex.initialDate) = :year', {
        year,
      });
    }
    const [content, totalElements] = await query.getManyAndCount();
    return {
      content,
      totalElements,
    };
  }
}
