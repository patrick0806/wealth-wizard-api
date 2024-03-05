import { Module } from '@nestjs/common';
import { CreateIncomeController } from './contexts/createIncome/createIncome.controller';
import { CreateIncomeService } from './contexts/createIncome/createIncome.service';
import { IncomeRepository } from '@shared/repositories/income.repository';

@Module({
  controllers: [CreateIncomeController],
  providers: [CreateIncomeService, IncomeRepository],
})
export class IncomesModule {}
