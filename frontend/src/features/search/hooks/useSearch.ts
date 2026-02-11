import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { apiClient } from '../../../app/config/axios';
import { useVacanciesStore } from '../../../entities/vacancies/store/useVacanciesStore';
import { useFiltersStore } from '../store/useFiltersStore';
import { createQuery } from '../utils/createQuery';

const fetcher = async (
    queries: Record<string, string | string[]>,
    page: number,
) => {
    const response = await apiClient.get(
        `/vacancies/search?per_page=1&page=${page}&${createQuery(queries)}`,
    );
    return response.data;
};

const REFETCH_INTERVAL = 30000;
const WINDOW_CLOSE_TIMER = 25000;

export const useSearch = (
    queries: Record<string, string | string[]>,
    enabled: boolean,
) => {
    const page = useRef(0);

    const pushVacancyId = useVacanciesStore((state) => state.pushVacancyId);
    const filters = useFiltersStore((state) => state.filters);

    const onFetchHandler = async () => {
        const response = await fetcher(filters, page.current);
        const autoRespondWindow = window.open(
            response.url,
            'Auto Respond',
            'width=800,height=600,toolbar=no,menubar=no',
        );
        setTimeout(() => autoRespondWindow?.close(), WINDOW_CLOSE_TIMER);
        pushVacancyId(response.vacancyId);

        return response;
    };

    const search = useQuery({
        queryKey: ['search', queries, page],
        queryFn: onFetchHandler,
        refetchInterval: REFETCH_INTERVAL,
        enabled,
        retry: 1,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            page.current += 1;
        }, REFETCH_INTERVAL);

        if (!enabled) return () => clearInterval(intervalId);
    }, [enabled]);

    return search;
};
