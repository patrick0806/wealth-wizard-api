import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', width: 50 })
  description: string;

  @Column({ type: 'varchar', width: 20 })
  type: string;
}
