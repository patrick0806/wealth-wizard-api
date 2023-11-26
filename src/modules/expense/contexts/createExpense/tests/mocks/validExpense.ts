import { randomUUID } from 'crypto';

export const validExpense = {
  id: randomUUID(),
  description: 'test',
  category: 'test',
  origin: 'test',
  installments: 0,
  installmentValue: 0,
  totalValue: 0,
  initialDate: new Date(),
};
