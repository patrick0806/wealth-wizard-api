import { ExpenseRepository } from '@shared/repositories/expense.repository';
import { CreateExpenseRequestDTO } from './dtos/request.dto';
import { Inject } from '@nestjs/common';

export class CreateExpenseService {
  constructor(
    @Inject(ExpenseRepository)
    private expenseRepository: ExpenseRepository,
  ) {}

  async execute(
    expenseDTO: CreateExpenseRequestDTO,
  ): Promise<CreateExpenseRequestDTO> {
    if (expenseDTO.installments > 0) {
      const totalValue = expenseDTO.installmentValue * expenseDTO.installments;

      const finishDate = new Date(expenseDTO.initialDate);
      finishDate.setMonth(finishDate.getMonth() + expenseDTO.installments);

      const newExpenses = [];

      for (let i = 0; i < expenseDTO.installments; i++) {
        const initialDate = new Date(expenseDTO.initialDate);
        const month = i + 1;
        initialDate.setMonth(initialDate.getMonth() + month);

        newExpenses.push({
          ...expenseDTO,
          initialDate,
          finishDate,
          totalValue,
        });
      }

      return this.expenseRepository.saveMany(newExpenses);
    }

    if (!expenseDTO.totalValue) {
      throw new Error('Total value is required');
    }

    return this.expenseRepository.save({
      ...expenseDTO,
      finishDate: expenseDTO.initialDate,
    });
  }
}
