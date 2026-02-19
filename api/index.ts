import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { VercelRequest, VercelResponse } from '@vercel/node';

let app;

async function bootstrap() {
  if (!app) {
    const nestApp = await NestFactory.create(AppModule);
    nestApp.useGlobalPipes(new ValidationPipe());
    await nestApp.init();
    app = nestApp.getHttpAdapter().getInstance();
  }
  return app;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const server = await bootstrap();
  return server(req, res);
}
