import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strips properties that don't have decorators
    forbidNonWhitelisted: true, // throws error if unknown values present
    transform: true, // transforms payloads to DTO instances
  }));

  const config = new DocumentBuilder()
    .setTitle('Analyzer IA C.V')
    .setDescription('Description de mon API')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'Authorization',
      in: 'header',
    },
    'jwt',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  

  const userService = app.get(UsersService);
  await userService.createAdminIfExists(); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
