import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { TelegramModule } from './telegram/telegram.module';
import { AiModule } from './ai/ai.module';

@Module({
    imports: [AuthModule, MailModule, TelegramModule, AiModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
