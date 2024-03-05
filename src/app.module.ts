import { AuthModule } from '@modules/auth/auth.module';
import { ExpenseModule } from '@modules/expenses/expenses.module';
import { IncomesModule } from '@modules/incomes/incomes.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { AuthGuard } from '@shared/guards/auth.guard';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    IncomesModule,
    ExpenseModule,
    RouterModule.register([
      {
        path: 'auth',
        module: AuthModule,
      },
      {
        path: 'users',
        module: UsersModule,
      },
      {
        path: 'incomes',
        module: IncomesModule,
      },
      {
        path: 'expenses',
        module: ExpenseModule,
      },
    ]),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
