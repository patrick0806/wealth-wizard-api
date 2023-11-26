import { CreateExpenseRequestDTO } from './dtos/request.dto';

export class CreateExpenseService {
  constructor() {}

  async execute(
    expenseDTO: CreateExpenseRequestDTO,
  ): Promise<CreateExpenseRequestDTO> {
    console.log(expenseDTO);
    return null;
  }
}
