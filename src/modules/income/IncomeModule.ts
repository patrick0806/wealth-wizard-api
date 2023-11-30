import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from '@shared/entities/income.entity';
import { CreateIncomeController } from './contexts/createIncome/createIncome.controller';
import { CreateIncomeService } from './contexts/createIncome/createIncome.service';
import { IncomeRepository } from '@shared/repositories/income.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  controllers: [CreateIncomeController],
  providers: [CreateIncomeService, IncomeRepository],
})
export class IncomeModule {}
