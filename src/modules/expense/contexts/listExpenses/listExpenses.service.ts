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
  }: ListExpensesRequestDTO): Promise<ListExpensesResponseDTO> {
    const { content, totalElements } =
      await this.expenseRepository.listExpenses(page, size);

    return {
      totalPages: Math.ceil(totalElements / size),
      totalElements,
      page,
      size: content.length,
      content,
    };
  }
}
