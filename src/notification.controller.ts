import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendNotificationDto } from './notification.dto';

@Controller('notifications')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }

    @Post('send')
    async send(@Body() sendNotificationDto: SendNotificationDto) {
        return await this.notificationService.sendPushNotification(sendNotificationDto);
    }
}
