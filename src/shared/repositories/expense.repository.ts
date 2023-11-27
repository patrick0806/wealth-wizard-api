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
      .createQueryBuilder('expense')
      .select(
        `id, 
        description, 
        category, 
        origin, 
        installments, 
        installment_value, 
        total_value, 
        initial_date, 
        finish_date,`,
      )
      .orderBy('expense.initialDate', 'DESC')
      .skip(Math.max(0, (page - 1) * size))
      .take(size);

    if (month) {
      query.andWhere('EXTRACT(MONTH FROM expense.initialDate) = :month', {
        month,
      });
    }
    if (year) {
      query.andWhere('EXTRACT(YEAR FROM expense.initialDate) = :year', {
        year,
      });
    }

    return query.execute();
  }
}
