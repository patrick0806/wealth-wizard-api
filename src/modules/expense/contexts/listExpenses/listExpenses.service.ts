import { Inject, Injectable } from '@nestjs/common';
import { ListExpensesRequestDTO } from './dtos/request.dto';
import { ExpenseRepository } from '@shared/repositories/expense.repository';
import { ListExpensesResponseDTO } from './dtos/response.dto';

@Injectable()
export class ListExpensesService {
  constructor(
    @Inject(ExpenseRepository)
    private expenseRepository: ExpenseRepository,
  ) {}

  async execute({
    page,
    size,
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
  }: ListExpensesRequestDTO): Promise<ListExpensesResponseDTO> {
    const { content, totalElements } =
      await this.expenseRepository.listExpenses(page, size, month, year);

    return {
      totalPages: Math.ceil(totalElements / size),
      totalElements,
      page,
      size: content.length,
      content,
    };
  }
}
