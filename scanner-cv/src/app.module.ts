import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import { CvModule } from './cv/cv.module';
import { AiModule } from './ai/ai.module';
import { AgentModule } from './ai/agent.module';

@Module({
  imports: [   
    ConfigModule.forRoot({
      envFilePath: '.env', 
      isGlobal: true,
  }),
     MongooseModule.forRoot('mongodb://localhost:27017/cv-analyzer-db'), UsersModule, AuthModule, EmailModule, CvModule,AiModule,AgentModule
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
