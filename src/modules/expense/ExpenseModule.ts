import { Module } from '@nestjs/common';
import { CreateExpenseController } from './contexts/createExpense/createExpense.controller';
import { CreateExpenseService } from './contexts/createExpense/createExpense.service';

@Module({
  imports: [],
  controllers: [CreateExpenseController],
  providers: [CreateExpenseService],
})
export class ExpenseModule {}
