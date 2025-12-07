import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AiModule } from './ai.module';
import { AgentController } from './agent.controller';

@Module({
  imports: [AiModule],
  controllers: [AgentController],
  providers: [AgentService],
  exports: [AgentService],
})
export class AgentModule {}
