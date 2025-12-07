import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class sendEmailDto{


@ApiProperty()
@IsEmail({},{each: true})
recipients: string[];

@ApiProperty()
@IsString()
subject: string;

@ApiProperty()
@IsString()
html: string;

@ApiProperty()
@IsOptional()
@IsString()
text?: string;
}