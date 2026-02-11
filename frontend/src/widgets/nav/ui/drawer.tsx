import { ActionIcon, Drawer, Flex, Typography } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import { links } from '../constants/links';
import NavLink from './nav_link';

export default function NavDrawer() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer
                radius="md"
                withCloseButton={false}
                overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
                transitionProps={{
                    transition: 'slide-left',
                }}
                position="right"
                size="60%"
                opened={opened}
                onClose={close}>
                <Flex
                    direction="column"
                    align="start"
                    justify="center"
                    gap="md">
                    <Typography className="self-start text-2xl font-display">
                        меню
                    </Typography>
                    <Flex
                        className="w-full"
                        direction="column"
                        align="start"
                        justify="center">
                        {links.map((link) => (
                            <NavLink link={link} />
                        ))}
                    </Flex>
                </Flex>
            </Drawer>

            <ActionIcon
                className="!fixed right-5"
                radius="md"
                color="dark"
                variant="transparent"
                onClick={open}>
                <IconMenu2 width={32} />
            </ActionIcon>
        </>
    );
}
