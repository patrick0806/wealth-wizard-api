export class Income {
  id: string;
  description: string;
  value: number;
  date: Date;
  category: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    description,
    value,
    date,
    category,
    userId,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.date = new Date(date);
    this.category = category;
    this.userId = userId;
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);
  }
}
