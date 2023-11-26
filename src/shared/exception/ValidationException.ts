import { HttpException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export class ValidationException extends HttpException {
  constructor(validationErrors: ValidationError[]) {
    const errorMessages = validationErrors.flatMap((error) => {
      const notFollowedRules = Object.keys(error.constraints);
      return notFollowedRules.map((rule) => error.constraints[rule]);
    });

    super(
      {
        message: 'Invalid params',
        erros: errorMessages,
      },
      HttpStatus.BAD_REQUEST,
    );
    this.name = 'ValidationException';
  }
}
