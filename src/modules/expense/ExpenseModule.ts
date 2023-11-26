import { Module } from '@nestjs/common';
import { CreateExpenseController } from './contexts/createExpense/createExpense.controller';
import { CreateExpenseService } from './contexts/createExpense/createExpense.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ExpenseModel,
  ExpenseSchema,
} from '@shared/repository/schemas/expense.schema';
import { ExpenseRepository } from '@shared/repository/expense.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ExpenseModel.name, schema: ExpenseSchema },
    ]),
  ],
  controllers: [CreateExpenseController],
  providers: [CreateExpenseService, ExpenseRepository],
})
export class ExpenseModule {}
