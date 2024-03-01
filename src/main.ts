import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from '@config/swagger';
import { API_BASE_PATH } from '@shared/constants/apiBasePath';
import { ValidationPipe } from '@nestjs/common';
import { ValidationException } from '@shared/exceptions/validationException';
import { ExceptionsFilter } from '@shared/filters/ExceptionFilter';
import { UnexpectedExceptionFilter } from '@shared/filters/UnexpectedExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new SwaggerConfig();
  swaggerConfig.setupSwagger(`${API_BASE_PATH}/docs`, app);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: (validationErros) => {
        throw new ValidationException(validationErros);
      },
    }),
  );

  app.useGlobalFilters(new ExceptionsFilter(), new UnexpectedExceptionFilter());
  app.setGlobalPrefix(API_BASE_PATH);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
