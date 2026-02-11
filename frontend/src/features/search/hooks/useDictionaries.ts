import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../app/config/axios';
import type { Dictionaries } from '../types/dictionaries.type';

const fetcher = async () => {
    const response = await apiClient.get('/dictionaries');
    return response.data;
};

export const useDictionaries = () => {
    const dictionaries = useQuery<Dictionaries>({
        queryKey: ['dictionaries'],
        queryFn: fetcher,
    });

    return dictionaries;
};
