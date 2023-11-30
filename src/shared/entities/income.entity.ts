import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'incomes' })
export class Income extends BaseEntity {
  @Column({ type: 'varchar', width: 50 })
  description: string;

  @Column({ name: 'value', type: 'decimal', precision: 10, scale: 2 })
  value: number;
}
