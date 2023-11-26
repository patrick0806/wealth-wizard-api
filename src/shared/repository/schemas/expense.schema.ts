import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema({ collection: 'expenses' })
export class ExpenseModel extends Document {
  @Prop({ _id: true, type: String })
  id: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

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

export type ExpenseDocument = HydratedDocument<ExpenseModel>;
export const ExpenseSchema = SchemaFactory.createForClass(ExpenseModel);
