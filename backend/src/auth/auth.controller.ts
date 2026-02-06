import {
    Controller,
    Delete,
    HttpCode,
    Post,
    Put,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('oauth')
    async oAuth(@Query('code') code: string) {
        return await this.authService.oAuth(code);
    }

    @UseGuards(AuthGuard)
    @Put('refresh')
    async refreshTokens(@Query('refresh_token') refreshToken: string) {
        return await this.authService.refreshTokens(refreshToken);
    }

    @UseGuards(AuthGuard)
    @Delete('logout')
    @HttpCode(204)
    async logout(@Req() request) {
        const accessToken = request.accessToken;
        return this.authService.logout(accessToken);
    }
}
