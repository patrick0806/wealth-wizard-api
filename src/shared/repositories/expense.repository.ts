import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseModel } from './models/expense.model';
import { Repository } from 'typeorm';
import { Expense } from '@shared/entities/expense';
import { expenseModelToExpense } from './parsers/expenseModelToExpense';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpenseRepository {
  constructor(
    @InjectRepository(ExpenseModel)
    private expenseRepository: Repository<ExpenseModel>,
  ) {}

  async save(expense: Partial<Expense>): Promise<Expense> {
    const newExpense = await this.expenseRepository.save(expense);
    return expenseModelToExpense(newExpense);
  }

  async saveMany(expenses: Partial<Expense>[]): Promise<Expense> {
    const newExpenses = await this.expenseRepository.save(expenses);
    return expenseModelToExpense(newExpenses[0]);
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
      content: content.map(expenseModelToExpense),
      totalElements,
    };
  }
}
