import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from '@config/swagger';
import { API_BASE_PATH } from '@shared/constants/apiBasePath';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new SwaggerConfig();
  swaggerConfig.setupSwagger(`${API_BASE_PATH}/docs`, app);

  app.setGlobalPrefix(API_BASE_PATH);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
