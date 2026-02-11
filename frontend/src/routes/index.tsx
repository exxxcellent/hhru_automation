import { Flex, Loader, Typography } from '@mantine/core';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { useEffect } from 'react';
import { useProfile } from '../entities/user/hooks/useProfile.hook';
import { useVacancies } from '../entities/vacancies/hooks/useVacancies.hook';
import type { Vacancy } from '../entities/vacancies/types/vacancy.type';
import { default as VacanciesList } from '../entities/vacancies/ui/list';
import MySearch from '../features/search/ui/my_search';
import { useTokens } from '../shared/hooks/useTokens';
import NavDrawer from '../widgets/nav/ui/drawer';

export const Route = createFileRoute('/' as unknown as undefined)({
    component: RouteComponent,
});

function RouteComponent() {
    const navigate = useNavigate();

    const { tokens } = useTokens();
    const profile = useProfile();
    const vacancies = useVacancies();

    useEffect(() => {
        if (!tokens.accessToken || !tokens.refreshToken)
            navigate({ to: '/welcome' });
    }, [tokens]);

    if (profile.isLoading || vacancies.isLoading)
        return (
            <Flex
                className="w-full min-h-full"
                justify="center"
                align="center">
                <Loader color="dark" />
            </Flex>
        );

    return (
        <>
            <Flex
                className="w-full min-h-full"
                direction="column"
                align="center"
                gap="xl">
                <Typography className="self-start text-2xl font-display">
                    автопоиск
                </Typography>
                <MySearch />
                <VacanciesList data={vacancies.data as Vacancy[]} />
            </Flex>
            <NavDrawer />
        </>
    );
}
