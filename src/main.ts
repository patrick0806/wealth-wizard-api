import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './config/SwaggerConfig';
import { API_BASE_PATH } from '@shared/constants/apiBasePath';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new SwaggerConfig();

  swaggerConfig.setupSwagger(`${API_BASE_PATH}/docs`, app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
