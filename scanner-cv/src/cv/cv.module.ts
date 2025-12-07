import { Module } from '@nestjs/common';
import { AiModule } from 'src/ai/ai.module';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';

@Module({
  imports:[AiModule],
  controllers: [CvController],
  providers: [CvService],
})
export class CvModule {}
