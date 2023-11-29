import { Injectable } from '@nestjs/common';
import { ResumeExpenseResponseDTO } from './dtos/response.dto';
import { ExpenseRepository } from '@shared/repositories/expense.repository';

@Injectable()
export class ResumeExpenseService {
  constructor(private expenseRepository: ExpenseRepository) {}

  async execute(): Promise<ResumeExpenseResponseDTO> {
    return this.expenseRepository.resumeExpense();
  }
}
