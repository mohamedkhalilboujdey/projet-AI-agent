import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [   
    ConfigModule.forRoot({
      envFilePath: '.env', 
      isGlobal: true,
  }),
     MongooseModule.forRoot('mongodb://localhost:27017/cv-analyzer-db'), UsersModule, AuthModule, EmailModule
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
