import { Controller, Post, Body } from '@nestjs/common';
import { AgentService } from './agent.service';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Agent Conversationnel')
@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post('start')
  @ApiOperation({ summary: 'Démarrer la conversation avec l’agent RH' })
  async start() {
    const reply = await this.agentService.startConversation();
    return {
      message: reply,
    };
  }

  @Post('message')
  @ApiOperation({ summary: 'Envoyer un message à l’agent RH et recevoir une réponse' })
  @ApiBody({
    description: 'Message du candidat pour continuer la conversation',
    type: 'object',
    schema: {
      type: 'object',
      properties: {
        text: {
          type: 'string',
          example: 'Je cherche un poste en Data Science.',
        },
      },
      required: ['text'],
    },
  })
  async message(@Body() body: { text: string }) {
    const reply = await this.agentService.continueConversation(body.text);
    return {
      message: reply,
    };
  }
}
