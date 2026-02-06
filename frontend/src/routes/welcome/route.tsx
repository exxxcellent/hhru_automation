import { Button, Flex, Typography } from '@mantine/core';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/welcome' as unknown as undefined)({
    component: RouteComponent,
});

const clientId = import.meta.env.VITE_CLIENT_ID;

export default function RouteComponent() {
    const link = `https://hh.ru/oauth/authorize?response_type=code&client_id=${clientId}`;

    return (
        <Flex
            h="100vh"
            justify="center"
            align="center"
            direction="column"
            gap="xl">
            <Flex
                w="100%"
                justify="center"
                align="center"
                direction="column"
                gap="md">
                <Typography
                    className="text-center !text-4xl leading-tight font-display"
                    fz="h1"
                    fw="bolder">
                    Добро <br /> пожаловать!
                </Typography>
                <Typography
                    className="text-center text-xl font-body"
                    fz="md"
                    fw="normal">
                    Приветствуем тебя в сервисе для автоматизации поиска работы
                </Typography>
            </Flex>
            <Button
                p="sm"
                radius="md"
                fullWidth
                color="dark"
                h="min-content">
                <Link to={link}>
                    <Flex
                        justify="center"
                        align="center"
                        gap="xs">
                        <Typography fz="md">Войти с помощью</Typography>
                        <img
                            className="w-8 h-8"
                            src="/icons/hh_logo_red.svg"
                            alt="hh_logo_red"
                        />
                    </Flex>
                </Link>
            </Button>
        </Flex>
    );
}
