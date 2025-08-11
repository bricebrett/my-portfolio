// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://my-portfolio-743wf2a0c-bricebretts-projects.vercel.app',
      'http://localhost:3000',
    ],
  });

  await app.listen(process.env.PORT || 4000, '0.0.0.0');
}
bootstrap();
