import { ExpenseModule } from '@modules/expense/ExpenseModule';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, { dbName: 'wealth-wizard' }),
    ExpenseModule,
    RouterModule.register([
      {
        path: 'expenses',
        module: ExpenseModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
