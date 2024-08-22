import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  dotenv.config(); // Carregar variáveis de ambiente

  const app = await NestFactory.create(AppModule);

  // Configurar o middleware de JSON se necessário
  app.use(express.json());

  // Habilitar CORS
  app.enableCors();

  // Adicionar ValidationPipe se estiver usando validação de DTOs
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}
bootstrap();
