import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DictionariesModule } from './dictionaries/dictionaries.module';
import { VacanciesModule } from './vacancies/vacancies.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AuthModule,
        UserModule,
        DictionariesModule,
        VacanciesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
