import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from '@shared/entities/expense.entity';
import { Injectable } from '@nestjs/common';
import { addMonths, endOfMonth, startOfMonth } from 'date-fns';
import { ExpenseStatus } from '@shared/enums/ExpenseStatus';

@Injectable()
export class ExpenseRepository {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  async save(expense: Partial<Expense>): Promise<Expense> {
    const newExpense = await this.expenseRepository.save(expense);
    return newExpense;
  }

  async listExpenses(page: number = 0, size: number = 10) {
    const initialDate = startOfMonth(new Date());
    const finishDate = endOfMonth(new Date());

    const query = this.expenseRepository
      .createQueryBuilder('ex')
      .where(
        'ex.initialDate <= :initialDate AND ex.finishDate >= :finishDate',
        {
          initialDate,
          finishDate,
        },
      )
      .andWhere('ex.status = :status', { status: ExpenseStatus.PENDING })
      .orderBy('ex.initialDate', 'DESC')
      .skip(Math.max(0, (page - 1) * size))
      .take(size);
    const [content, totalElements] = await query.getManyAndCount();
    return {
      content,
      totalElements,
    };
  }

  async resumeExpense() {
    const initialDate = startOfMonth(new Date());
    const finishDate = endOfMonth(new Date());

    const [sumMonthDebts] = await this.expenseRepository
      .createQueryBuilder('ex')
      .select('COALESCE(SUM(ex.totalValue),0) as total')
      .where(
        'ex.initialDate <= :initialDate AND ex.finishDate >= :finishDate',
        {
          initialDate,
          finishDate,
        },
      )
      .andWhere('installments = 0')
      .andWhere('ex.status = :status', { status: ExpenseStatus.PENDING })
      .execute();

    const [sumMonthInstallments] = await this.expenseRepository
      .createQueryBuilder('ex')
      .select('COALESCE(SUM(ex.installmentValue),0) as total')
      .where(
        'ex.initialDate <= :initialDate AND ex.finishDate >= :finishDate',
        {
          initialDate,
          finishDate,
        },
      )
      .andWhere('installments > 0')
      .andWhere('ex.status = :status', { status: ExpenseStatus.PENDING })
      .execute();

    const nextMonth = addMonths(initialDate, 1);
    const initNextMonth = startOfMonth(nextMonth);
    const finishNextMonth = endOfMonth(nextMonth);
    const [sumNextMounthDebts] = await this.expenseRepository
      .createQueryBuilder('ex')
      .select('COALESCE(SUM(ex.installmentValue),0) as total')
      .where(
        'ex.initialDate <= :initialDate AND ex.finishDate >= :finishDate',
        {
          initialDate: initNextMonth,
          finishDate: finishNextMonth,
        },
      )
      .andWhere('installments > 0')
      .andWhere('ex.status = :status', { status: ExpenseStatus.PENDING })
      .execute();

    return {
      expenseAmountThisMonth:
        Number(sumMonthDebts.total) + Number(sumMonthInstallments.total),
      expenseAmountNextMonth: Number(sumNextMounthDebts.total),
    };
  }
}
