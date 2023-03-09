import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  app.useWebSocketAdapter(new IoAdapter(app));
}
bootstrap();
