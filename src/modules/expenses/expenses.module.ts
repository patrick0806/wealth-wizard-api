import { Module } from '@nestjs/common';
import { CreateExpenseController } from './contexts/createExpense/createExpense.controller';
import { CreateExpenseService } from './contexts/createExpense/createExpense.service';
import { ExpenseRepository } from '@shared/repositories/expense.repository';

@Module({
  imports: [],
  controllers: [CreateExpenseController],
  providers: [CreateExpenseService, ExpenseRepository],
})
export class ExpenseModule {}
