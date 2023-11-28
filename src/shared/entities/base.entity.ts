import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'created_at', type: 'timestamp', select: false })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', select: false })
  updatedAt: Date;
}
