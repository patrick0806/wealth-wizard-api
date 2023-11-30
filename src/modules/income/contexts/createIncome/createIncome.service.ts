import { Inject, Injectable } from '@nestjs/common';
import { IncomeRepository } from '@shared/repositories/income.repository';
import { CreateIncomeRequestDTO } from './dtos/request.dto';
import { CreateIncomeResponseDTO } from './dtos/response.dto';

@Injectable()
export class CreateIncomeService {
  constructor(
    @Inject(IncomeRepository)
    private incomeRepository: IncomeRepository,
  ) {}

  async execute(
    newIncome: CreateIncomeRequestDTO,
  ): Promise<CreateIncomeResponseDTO> {
    return this.incomeRepository.save(newIncome);
  }
}
