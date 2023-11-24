import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Expense {
  @Prop()
  id: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  origin: string;

  @Prop({ required: true })
  installments: number;

  @Prop()
  installmentsValue: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  initDate: Date;

  @Prop()
  endDate: Date;
}

export type ExpenseDocument = HydratedDocument<Expense>;
export const ExpenseSchema = SchemaFactory.createForClass(Expense);
