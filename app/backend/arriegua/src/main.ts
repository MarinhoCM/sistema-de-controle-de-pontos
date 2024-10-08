import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { serverConfig } from './config/settings.config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const logger = new Logger(bootstrap.name);
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  app.enableShutdownHooks();
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(serverConfig.port);

  logger.log(`Servidor executando na porta ${serverConfig.port}`);
}
bootstrap();
