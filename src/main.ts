import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './config/SwaggerConfig';
import { API_BASE_PATH } from '@shared/constants/apiBasePath';
import { ValidationPipe } from '@nestjs/common';
import { ValidationException } from '@shared/exception/ValidationException';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new SwaggerConfig();

  swaggerConfig.setupSwagger(`${API_BASE_PATH}/docs`, app);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (validationErros) => {
        throw new ValidationException(validationErros);
      },
    }),
  );

  app.setGlobalPrefix(API_BASE_PATH);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
