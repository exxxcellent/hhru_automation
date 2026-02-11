import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../app/config/axios';
import { useVacanciesStore } from '../store/useVacanciesStore';
import type { Vacancy } from '../types/vacancy.type';

const fetcher = async (vacancyIds: string[] | null) => {
    if (!vacancyIds) return;
    const response = await apiClient.post('/vacancies/vacancies_by_ids', {
        vacancyIds,
    });
    return response.data;
};

export const useVacancies = () => {
    const vacancyIds = useVacanciesStore((state) => state.vacancyIds);

    const vacancies = useQuery<Vacancy[]>({
        queryKey: ['vacancies'],
        queryFn: () => fetcher(vacancyIds),
    });

    return vacancies;
};
