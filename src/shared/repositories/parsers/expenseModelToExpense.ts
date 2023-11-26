import { Expense } from '@shared/entities/expense';
import { ExpenseModel } from '../models/expense.model';

export function expenseModelToExpense(expenseModel: ExpenseModel): Expense {
  return {
    id: expenseModel.id,
    description: expenseModel.description,
    category: expenseModel.category,
    origin: expenseModel.origin,
    installments: expenseModel.installments,
    installmentValue: expenseModel.installmentValue,
    totalValue: expenseModel.totalValue,
    initialDate: expenseModel.initialDate,
    finishDate: expenseModel.finishDate,
  };
}
