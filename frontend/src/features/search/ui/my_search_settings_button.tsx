import { Button, Flex, Typography } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import MySearchSettingsDrawer from './my_search_settings_drawer';

export default function MySearchSettingsButton() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            {opened && (
                <Button
                    className="!fixed bottom-3 left-1 right-1 z-50"
                    onClick={close}
                    variant="filled"
                    color="dark"
                    radius="md"
                    h="min-content"
                    m="sm"
                    p="sm"
                    fz="md">
                    Применить
                </Button>
            )}
            <MySearchSettingsDrawer
                opened={opened}
                close={close}
            />
            <Button
                onClick={open}
                radius="md"
                variant="light"
                color="dark">
                <Flex
                    align="center"
                    gap="xs">
                    <IconMenu2 width={20} />
                    <Typography
                        fz="sm"
                        fw="bold">
                        Настроить
                    </Typography>
                </Flex>
            </Button>
        </>
    );
}
