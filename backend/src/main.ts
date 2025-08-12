// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://my-portfolio-nl2il2ts8-bricebretts-projects.vercel.app/',
      'http://localhost:3000',
    ],
  });

  await app.listen(process.env.PORT || 4000, '0.0.0.0');
}
bootstrap();
