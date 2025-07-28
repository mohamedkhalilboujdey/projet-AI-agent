import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { sendEmailDto } from './dto/email.dto';

@Injectable()
export class EmailService {
    constructor(private readonly configService: ConfigService){}
    emailTransport(){
        const transporter = nodemailer.createTransport({
            host:this.configService.get<string>('EMAIL_HOST'),
            port:this.configService.get<number>('EMAIL_PORT'),
            secure: false,
            auth:{
                user:this.configService.get<string>('EMAIL_USER'),
                pass:this.configService.get<string>('EMAIL_PASSWORD'),

            },

        })
        return transporter
    }

    async sendEmail(dto: sendEmailDto){
        const {recipients, subject, html} = dto;

        const transport = this.emailTransport();

        console.log("transport", transport);
        

        const options: nodemailer.SendMailOptions = {
            from: this.configService.get<string>('EMAIL_USER'),
            to:recipients,
            subject: subject,
            html: html,
        };

        console.log("options", options);

        try{
          await transport.sendMail(options);
          console.log('Email sent successfully');
        } catch(error){
          console.log('Error sending mail: ',error);
        }
    }
}
