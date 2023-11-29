import { Module } from '@nestjs/common';
import { CreateExpenseController } from './contexts/createExpense/createExpense.controller';
import { CreateExpenseService } from './contexts/createExpense/createExpense.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from '@shared/entities/expense.entity';
import { ExpenseRepository } from '@shared/repositories/expense.repository';
import { ListExpensesController } from './contexts/listExpenses/listExepnses.controller';
import { ListExpensesService } from './contexts/listExpenses/listExpenses.service';
import { ResumeExpenseController } from './contexts/resumeExpense/resumeExpense.controller';
import { ResumeExpenseService } from './contexts/resumeExpense/resumeExpense.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [
    CreateExpenseController,
    ListExpensesController,
    ResumeExpenseController,
  ],
  providers: [
    CreateExpenseService,
    ListExpensesService,
    ResumeExpenseService,
    ExpenseRepository,
  ],
})
export class ExpenseModule {}
