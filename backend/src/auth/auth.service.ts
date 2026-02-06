import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { apiClient, EnvEnum, ErrorsEnum, GrantTypeEnum } from 'libs';

@Injectable()
export class AuthService {
    constructor(private readonly configService: ConfigService) {}

    async oAuth(code: string) {
        if (!code)
            throw new BadRequestException(
                ErrorsEnum.AUTHORIZATION_CODE_IS_REQUIRED,
            );
        const response = await apiClient.post(
            'token',
            {},
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                params: {
                    client_id: this.configService.get(EnvEnum.CLIENT_ID),
                    client_secret: this.configService.get(
                        EnvEnum.CLIENT_SECRET,
                    ),
                    code,
                    grant_type: GrantTypeEnum.AUTHORIZATION_CODE,
                },
            },
        );
        return response.data;
    }

    async refreshTokens(refreshToken: string) {
        if (!refreshToken)
            throw new BadRequestException(ErrorsEnum.REFRESH_TOKEN_IS_REQUIRED);
        const response = await apiClient.post(
            'token',
            {},
            {
                params: {
                    grant_type: GrantTypeEnum.REFRESH_TOKEN,
                    refresh_token: refreshToken,
                },
            },
        );
        return response.data;
    }

    async logout(accessToken: string) {
        if (!accessToken)
            throw new BadRequestException(ErrorsEnum.ACCESS_TOKEN_IS_REQUIRED);
        const response = await apiClient.delete('/token', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    }
}
