import { MailerModule } from '@nestjs-modules/mailer';
import { Global, Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { EmailService } from './email.service';

dotenv.config();
@Global()
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'QueueTest',
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      defaults: {
        from: process.env.FROM_EMAIL,
      },
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
