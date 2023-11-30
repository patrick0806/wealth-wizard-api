import { ExpenseModule } from '@modules/expense/ExpenseModule';
import { IncomeModule } from '@modules/income/IncomeModule';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
      migrations: ['./config/database/migrations/*.{ts,js}'],
      synchronize: false,
      logging: true,
    }),
    ExpenseModule,
    IncomeModule,
    RouterModule.register([
      {
        path: 'expenses',
        module: ExpenseModule,
      },
      {
        path: 'incomes',
        module: IncomeModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
