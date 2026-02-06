import { Flex, Image, Loader, Typography } from '@mantine/core';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useProfile } from '../entities/user/hooks/useProfile.hook';
import { useTokens } from '../shared/hooks/useTokens';
import Nav from '../widgets/nav/ui/nav';

export const Route = createFileRoute('/' as unknown as undefined)({
    component: RouteComponent,
});

function RouteComponent() {
    const navigate = useNavigate();

    const profile = useProfile();
    const { tokens } = useTokens();

    useEffect(() => {
        if (!tokens.accessToken || !tokens.refreshToken)
            navigate({ to: '/welcome' });
    }, [tokens]);

    if (profile.isLoading)
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
            <Nav />
            <Flex
                className="w-full min-h-full"
                direction="column"
                align="center"
                justify="center"
                gap="xl">
                <Typography className="self-start text-2xl font-display">
                    Главная
                </Typography>
                <Flex
                    className="size-full"
                    align="center"
                    justify="center"
                    direction="column"
                    gap="sm">
                    <Flex
                        gap="sm"
                        justify="center">
                        <Typography className="text-center !text-4xl leading-tight font-display">
                            Привет!
                        </Typography>
                        <Image
                            w="48px"
                            src="/icons/hello.svg"
                        />
                    </Flex>
                    <Typography
                        className="text-center"
                        fz="md">
                        На этой странице ты будешь видеть результат действий
                        программы
                    </Typography>
                </Flex>
            </Flex>
        </>
    );
}
