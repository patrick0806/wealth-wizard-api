import { Inject } from '@nestjs/common';
import { CreateExpenseRequestDTO } from './dtos/request.dto';
import { ExpenseRepository } from '@shared/repository/expense.repository';

export class CreateExpenseService {
  constructor(
    @Inject(ExpenseRepository)
    private expenseRepository: ExpenseRepository,
  ) {}

  async execute(
    expenseDTO: CreateExpenseRequestDTO,
  ): Promise<CreateExpenseRequestDTO> {
    const savedItem = await this.expenseRepository.create(expenseDTO);
    return savedItem;
  }
}
