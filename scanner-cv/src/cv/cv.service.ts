import { Injectable } from '@nestjs/common';
import { cleanText } from './utils/clean-text.util';

@Injectable()
export class CvService {
  processCvText(rawText: string): string {
    return cleanText(rawText);
  }
}
