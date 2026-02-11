import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../app/config/axios';

const fetcher = async () => {
    const response = await apiClient.get('/dictionaries/locales');
    return response.data;
};

interface Locale {
    current: boolean;
    id: string;
    name: string;
}

export const useLocales = () => {
    const locales = useQuery<Locale[]>({
        queryKey: ['locales'],
        queryFn: fetcher,
    });

    return locales;
};
