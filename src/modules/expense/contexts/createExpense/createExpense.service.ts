import { ExpenseRepository } from '@shared/repositories/expense.repository';
import { CreateExpenseRequestDTO } from './dtos/request.dto';
import { BadRequestException, Inject } from '@nestjs/common';
import { addMonths } from 'date-fns';

export class CreateExpenseService {
  constructor(
    @Inject(ExpenseRepository)
    private expenseRepository: ExpenseRepository,
  ) {}

  async execute(
    expenseDTO: CreateExpenseRequestDTO,
  ): Promise<CreateExpenseRequestDTO> {
    let finishDate = new Date(expenseDTO.initialDate);
    let totalValue: number = expenseDTO.totalValue;
    let installmentValue = expenseDTO.installmentValue;

    if (expenseDTO.installments > 0) {
      finishDate = addMonths(finishDate, expenseDTO.installments);
      totalValue = expenseDTO.installmentValue * expenseDTO.installments;
    } else {
      if (!totalValue || totalValue <= 0)
        throw new BadRequestException({
          message: 'Total value must be greater than 0 ',
        });
      installmentValue = 0;
    }

    return this.expenseRepository.save({
      ...expenseDTO,
      finishDate,
      installmentValue,
      totalValue,
    });
  }
}
