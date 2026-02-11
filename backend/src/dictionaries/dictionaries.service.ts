import { BadRequestException, Injectable } from '@nestjs/common';
import { apiClient, ErrorsEnum } from 'libs';

@Injectable()
export class DictionariesService {
    async getAll(accessToken: string) {
        if (!accessToken)
            throw new BadRequestException(ErrorsEnum.ACCESS_TOKEN_IS_REQUIRED);
        const response = await apiClient.get('/dictionaries', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    }

    async getLocales(accessToken: string) {
        if (!accessToken)
            throw new BadRequestException(ErrorsEnum.ACCESS_TOKEN_IS_REQUIRED);
        const response = await apiClient.get('/locales', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    }
}
