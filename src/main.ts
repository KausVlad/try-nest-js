import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); //! global prefix
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // whitelist: true забезпечує, що лише ті дані, які відповідають обмеженням валідації, будуть передані до вашого контролера, і всі інші властивості будуть відкинуті.
    }),
  );
  await app.listen(3000);
}
bootstrap();
