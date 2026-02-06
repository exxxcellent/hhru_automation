import { BadRequestException, Injectable } from '@nestjs/common';
import { apiClient, ErrorsEnum } from 'libs';

@Injectable()
export class UserService {
    async getMe(accessToken: string) {
        if (!accessToken)
            throw new BadRequestException(ErrorsEnum.ACCESS_TOKEN_IS_REQUIRED);
        const response = await apiClient.get('/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    }
}
