import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Category } from './category.entity';
import { ExpenseStatus } from '@shared/enums/ExpenseStatus';

@Entity({ name: 'expenses' })
export class Expense extends BaseEntity {
  @Column({ type: 'varchar', width: 50 })
  description: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({ type: 'integer', default: 0 })
  installments: number;

  @Column({
    name: 'installment_value',
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  installmentValue: number;

  @Column({ name: 'total_value', type: 'decimal', precision: 10, scale: 2 })
  totalValue: number;

  @Column({ name: 'initial_date', type: 'date' })
  initialDate: Date;

  @Column({ name: 'finish_date', type: 'date' })
  finishDate: Date;

  @Column({ type: 'varchar', width: 20, default: ExpenseStatus.PENDING })
  status: string;

  @Column({ name: 'payment_method', type: 'varchar', width: 30 })
  paymentMethod: string;

  //notes -- future field
}
