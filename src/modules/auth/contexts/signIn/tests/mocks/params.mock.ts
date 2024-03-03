import { Response } from 'express';
import { vi } from 'vitest';

export const bodyParams = {
  name: 'any_name',
  email: 'any_email',
  password: 'any_password',
};

export const expressResponse: Partial<Response> = {
  setHeader: vi.fn(),
  send: vi.fn(),
};
