import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { describe, beforeAll, expect, it, vi, afterAll } from 'vitest';
import { CreateExpenseController } from '../createExpense.controller';
import { CreateExpenseService } from '../createExpense.service';
import { ExpenseRepository } from '@shared/repositories/expense.repository';
import { validExpense } from './mocks/validExpense';
import { INestApplication } from '@nestjs/common';
import { randomUUID } from 'crypto';

describe('Create expense', async () => {
  let app: INestApplication;
  let repository: ExpenseRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateExpenseController],
      providers: [
        CreateExpenseService,
        {
          provide: ExpenseRepository,
          useValue: {
            save: vi.fn(),
            saveMany: vi.fn(),
          },
        },
      ],
    }).compile();

    repository = module.get<ExpenseRepository>(ExpenseRepository);
    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    const controller = app.get<CreateExpenseController>(
      CreateExpenseController,
    );

    const service = app.get<CreateExpenseService>(CreateExpenseService);
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  //TODO - repair to running with supertest (Route not found)
  it('should be able to create an expense', async () => {
    const id = randomUUID();
    const totalValue = validExpense.totalValue;
    const finishDate = validExpense.initialDate;
    const savedExpense = {
      ...validExpense,
      id,
      totalValue,
      finishDate,
    };

    vi.spyOn(repository, 'save').mockResolvedValue(savedExpense);
    console.log(app);
    const response = await request(app.getMicroservices())
      .post('/api/v1/expenses')
      .send(validExpense);
    console.log(response);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).equal(savedExpense);
  });

  afterAll(async () => {
    await app.close();
  });
});
