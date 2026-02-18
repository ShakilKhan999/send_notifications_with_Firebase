import { IsNotEmpty, IsString, IsOptional, IsObject } from 'class-validator';

export class SendNotificationDto {
    @IsString()
    @IsNotEmpty()
    token: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    body: string;

    @IsOptional()
    @IsObject()
    data?: Record<string, string>;
}
