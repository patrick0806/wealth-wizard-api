import { Injectable } from '@nestjs/common';
import { CreateExpenseRequestDTO } from './dtos/request.dto';
import { CreateExpenseResponseDTO } from './dtos/response.dto';
import { ExpenseRepository } from '@shared/repositories/expense.repository';

@Injectable()
export class CreateExpenseService {
  constructor(private expenseRepository: ExpenseRepository) {}

  async execute(
    expesneData: CreateExpenseRequestDTO,
    userId: string,
  ): Promise<CreateExpenseResponseDTO> {
    expesneData.userId = userId;
    return await this.expenseRepository.createIncome(expesneData);
  }
}
