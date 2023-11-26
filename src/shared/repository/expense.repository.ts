import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ExpenseModel } from './schemas/expense.schema';
import { Model } from 'mongoose';
import { Expense } from '@shared/entities/Expense';

@Injectable()
export class ExpenseRepository {
  constructor(
    @InjectModel(ExpenseModel.name) private expenseModel: Model<ExpenseModel>,
  ) {}

  async create(expense: Partial<ExpenseModel>): Promise<Expense> {
    const createdExpense = new this.expenseModel(expense);
    await createdExpense.save();
    return {
      id: createdExpense._id,
      description: createdExpense.description,
      origin: createdExpense.origin,
      category: createdExpense.category,
      installments: createdExpense.installments,
      installmentsValue: createdExpense.installmentsValue,
      totalPrice: createdExpense.totalPrice,
      initDate: createdExpense.initDate,
      endDate: createdExpense.endDate,
    };
  }
}
