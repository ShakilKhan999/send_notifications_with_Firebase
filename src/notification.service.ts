import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { SendNotificationDto } from './notification.dto';

@Injectable()
export class NotificationService {
    private readonly logger = new Logger(NotificationService.name);

    constructor(private readonly firebaseService: FirebaseService) { }

    async sendPushNotification(payload: SendNotificationDto) {
        const { token, title, body, data } = payload;

        try {
            const message = {
                token,
                notification: {
                    title,
                    body,
                },
                data: data || {},
            };

            const response = await this.firebaseService.getMessaging().send(message);
            this.logger.log(`Successfully sent message: ${response}`);

            return {
                success: true,
                messageId: response,
            };
        } catch (error) {
            this.logger.error('Error sending push notification:', error);
            throw new InternalServerErrorException('Failed to send notification via Firebase');
        }
    }
}
