import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from '@shared/entities/income.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IncomeRepository {
  constructor(
    @InjectRepository(Income)
    private incomeRepository: Repository<Income>,
  ) {}

  async save(income: Partial<Income>) {
    return this.incomeRepository.save(income);
  }

  async resumeIncome(): Promise<number> {
    const query = await this.incomeRepository
      .createQueryBuilder('income')
      .select('SUM(income.value)', 'total')
      .where(
        'EXTRACT(MONTH FROM income.createdAt) = EXTRACT(MONTH FROM CURRENT_DATE)',
      )
      .getRawOne();

    return Number(query.total);
  }
}
