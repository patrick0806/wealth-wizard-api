import { Module } from '@nestjs/common';
import { CreateExpenseController } from './contexts/createExpense/createExpense.controller';
import { CreateExpenseService } from './contexts/createExpense/createExpense.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from '@shared/entities/expense.entity';
import { ExpenseRepository } from '@shared/repositories/expense.repository';
import { ListExpensesController } from './contexts/listExpenses/listExepnses.controller';
import { ListExpensesService } from './contexts/listExpenses/listExpenses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [CreateExpenseController, ListExpensesController],
  providers: [CreateExpenseService, ListExpensesService, ExpenseRepository],
})
export class ExpenseModule {}
