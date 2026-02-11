import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { DictionariesService } from './dictionaries.service';

@Controller('dictionaries')
export class DictionariesController {
    constructor(private readonly dictionariesService: DictionariesService) {}

    @UseGuards(AuthGuard)
    @Get('')
    async getAll(@Req() request) {
        const accessToken = request.accessToken;
        return this.dictionariesService.getAll(accessToken);
    }

    @UseGuards(AuthGuard)
    @Get('locales')
    async getLocales(@Req() request) {
        const accessToken = request.accessToken;
        return this.dictionariesService.getLocales(accessToken);
    }
}
