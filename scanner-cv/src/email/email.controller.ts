import { Body, Controller, Post } from '@nestjs/common';
import { sendEmailDto } from './dto/email.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService){}
    
    @Post('send')
    async sendMail(@Body() dto: sendEmailDto) {
        await this.emailService.sendEmail(dto);
        return { message: 'Email sent successfully'};
    }
}
