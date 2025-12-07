import { Injectable } from '@nestjs/common';
import Together from 'together-ai';

@Injectable()
export class AiService {
  private togetherClient: Together;

  constructor() {
    this.togetherClient = new Together({
      apiKey: process.env.TOGETHER_API_KEY as string,
    });
  }
  async analyzeCvContent(cvText: string): Promise<string> {
    const prompt = `
    Tu es un assistant RH intelligent. Voici un extrait de CV :
    
    "${cvText}"
    
    Analyse ce CV et retourne une réponse au format JSON avec les clés suivantes :
    {

      "experienceLevel": "junior | intermédiaire | senior",
      "postesRecommandes": ["Poste 1", "Poste 2", ...]
    }
    `;
    
    return this.generateText(prompt);
  }
  

  async generateText(prompt: string): Promise<string> {
    const response = await this.togetherClient.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
    });

    const content = response.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No content returned from Together AI');
    }

    return content;
  }
}
