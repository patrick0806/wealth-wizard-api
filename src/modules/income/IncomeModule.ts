import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from '@shared/entities/income.entity';
import { CreateIncomeController } from './contexts/createIncome/createIncome.controller';
import { CreateIncomeService } from './contexts/createIncome/createIncome.service';
import { IncomeRepository } from '@shared/repositories/income.repository';
import { ResumeIncomeService } from './contexts/resumeIncome/resumeIncome.service';
import { ResumeIncomeController } from './contexts/resumeIncome/resumeIncome.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  controllers: [CreateIncomeController, ResumeIncomeController],
  providers: [CreateIncomeService, ResumeIncomeService, IncomeRepository],
})
export class IncomeModule {}
