import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './schemas/expense.schema';
import { Model } from 'mongoose';

@Injectable()
export class ExpenseRepository {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
  ) {}

  async create(expense: any) {
    console.log(expense);
    const createdExpense = new this.expenseModel(expense);
    return createdExpense.save();
  }
}
