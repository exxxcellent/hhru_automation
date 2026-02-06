import { ActionIcon, Flex } from '@mantine/core';
import { IconHome, IconSettings } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

export default function Nav() {
    return (
        <Flex
            p="lg"
            justify="center"
            align="center"
            gap="lg"
            className="!fixed bottom-0 left-0 w-full h-1/12 bg-[var(--mantine-color-dark-filled)]">
            <ActionIcon
                radius="md"
                variant="subtle"
                color="white"
                size="lg">
                <Link to="/">
                    <IconHome />
                </Link>
            </ActionIcon>
            <ActionIcon
                radius="md"
                variant="subtle"
                color="white"
                size="lg">
                <Link to="/settings">
                    <IconSettings />
                </Link>
            </ActionIcon>
        </Flex>
    );
}
