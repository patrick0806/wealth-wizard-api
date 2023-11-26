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
}
