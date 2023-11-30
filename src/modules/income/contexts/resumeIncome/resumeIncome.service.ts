import { Injectable } from '@nestjs/common';
import { IncomeRepository } from '@shared/repositories/income.repository';
import { ResumeIncomeResponseDTO } from './dtos/response.dto';

@Injectable()
export class ResumeIncomeService {
  constructor(private incomeRepository: IncomeRepository) {}

  async execute(): Promise<ResumeIncomeResponseDTO> {
    const total = await this.incomeRepository.resumeIncome();
    return { totalIncomeThisMonth: total };
  }
}
