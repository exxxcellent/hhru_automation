import { Button, Flex, Typography } from '@mantine/core';
import { IconArrowRight, IconUser } from '@tabler/icons-react';
import { useProfile } from '../hooks/useProfile.hook';

export default function UserProfilePreview() {
    const { data: profile } = useProfile();

    return (
        <Button
            fullWidth
            h="max-content"
            variant="light"
            color="dark"
            radius="lg"
            p="lg">
            <Flex
                w="100vw"
                h="100%"
                justify="space-between"
                align="center">
                <IconUser size="36px" />
                <Flex
                    direction="column"
                    align="start"
                    gap="xs">
                    <Typography fw="bold">
                        {profile?.last_name} {profile?.first_name}{' '}
                        {profile?.middle_name}
                    </Typography>
                    <Typography>{profile?.email}</Typography>
                </Flex>
                <IconArrowRight />
            </Flex>
        </Button>
    );
}
