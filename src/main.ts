import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // await app.listen(process.env.PORT ?? 2458);
  // Vercel handles the server automatically via api/index.ts
  await app.init();
}

// Only call bootstrap() when running locally (not on Vercel)
if (process.env.VERCEL !== '1') {
  bootstrap();
}
