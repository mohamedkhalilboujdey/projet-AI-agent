import { Injectable } from '@nestjs/common';
import { AiService } from './ai.service';

@Injectable()
export class AgentService {
  private conversationHistory: { role: 'user' | 'assistant'; content: string }[] = [];

  constructor(private readonly aiService: AiService) {}

  async startConversation(): Promise<string> {
    const intro = `
    Tu es un consultant RH intelligent qui aide les candidats à trouver un emploi.
    Commence la conversation en te présentant et en posant la première question : 
    "Dans quel domaine souhaitez-vous travailler ?"
    `;
    const reply = await this.aiService.generateText(intro);

    this.conversationHistory.push({ role: 'assistant', content: reply });
    return reply;
  }

  async continueConversation(userMessage: string): Promise<string> {
    this.conversationHistory.push({ role: 'user', content: userMessage });

    const context = `
    Historique de conversation :
    ${this.conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')}

    Continue la discussion naturellement, en posant une seule nouvelle question à la fois,
    pour comprendre les préférences du candidat (poste, expérience, localisation, salaire...).
    `;
    const reply = await this.aiService.generateText(context);
    this.conversationHistory.push({ role: 'assistant', content: reply });

    return reply;
  }
}
