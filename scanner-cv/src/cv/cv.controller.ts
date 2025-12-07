import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import * as pdfParse from 'pdf-parse';
  import { Express } from 'express';
  import { CvService } from './cv.service';

  import {
    ApiConsumes,
    ApiBody,
    ApiOperation,
    ApiTags,
  } from '@nestjs/swagger';
import { AiService } from 'src/ai/ai.service';
  
  @ApiTags('CV')
  @Controller('cv')
  export class CvController {
    constructor(private readonly aiService: AiService,private readonly cvService:CvService) {}
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
      description: 'Fichier CV en PDF',
      type: 'multipart/form-data',
      schema: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    })
    @ApiOperation({ summary: 'Uploader un CV PDF et extraire le texte' })
    async uploadCv(@UploadedFile() file: Express.Multer.File) {
      const data = await pdfParse(file.buffer);
      const cleanedText = this.cvService.processCvText(data.text);
      const analysis = await this.aiService.analyzeCvContent(cleanedText);
      return {
        cleanedText,
        analysis,

        //data
      };
    }
  }
  