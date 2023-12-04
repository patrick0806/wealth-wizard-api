import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'expenses' })
export class Expense extends BaseEntity {
  @Column({ type: 'varchar', width: 50 })
  description: string;

  @Column({ type: 'varchar', width: 30 })
  category: string;

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

  @Column({ type: 'varchar', width: 20, default: 'pending' })
  status: string;

  @Column({ name: 'payment_method', type: 'varchar', width: 30 })
  paymentMethod: string;

  //notes -- future field
}
