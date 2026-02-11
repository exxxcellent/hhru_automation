import { Flex, Loader, Typography } from '@mantine/core';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { apiClient } from '../../app/config/axios';
import { useProfile } from '../../entities/user/hooks/useProfile.hook';
import UserProfilePreview from '../../entities/user/ui/profile_preview';
import { useTokens } from '../../shared/hooks/useTokens';
import NavDrawer from '../../widgets/nav/ui/drawer';

export const Route = createFileRoute('/profile')({
    component: RouteComponent,
});

function RouteComponent() {
    const navigate = useNavigate();

    const { deleteTokens } = useTokens();
    const profile = useProfile();

    const logout = async () => {
        const reponse = await apiClient.delete('/auth/logout');
        if (reponse.status === 204) {
            deleteTokens();
            navigate({ to: '/welcome' });
        }
    };

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
        <Flex
            w="100%"
            h="100%"
            direction="column"
            gap="lg">
            <Typography className="self-start text-2xl font-display">
                профиль
            </Typography>
            <UserProfilePreview />
            <NavDrawer />
        </Flex>
    );
}
