import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard)
    @Get('me')
    async getMe(@Req() request) {
        const accessToken = request.accessToken;
        return await this.userService.getMe(accessToken);
    }
}
