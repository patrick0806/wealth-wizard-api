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
    mounth = new Date().getMonth(),
    year = new Date().getFullYear(),
  }: ListExpensesRequestDTO): Promise<ListExpensesResponseDTO> {
    const { content, totalElements } =
      await this.expenseRepository.listExpenses(page, size, mounth, year);

    return {
      page: page,
      size: size,
      content,
      totalElements,
      totalPages: Math.ceil(totalElements / size),
    };
  }
}
