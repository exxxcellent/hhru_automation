import { Drawer, Flex, Typography } from '@mantine/core';
import { useFilters } from '../hooks/useFilters';
import MySearchSettingsInputs from './my_search_settings_inputs';

interface MySearchSettingsDrawerProps {
    opened: boolean;
    close: () => void;
}

export default function MySearchSettingsDrawer({
    opened,
    close,
}: MySearchSettingsDrawerProps) {
    const filters = useFilters();

    return (
        <Drawer
            zIndex={10}
            radius="md"
            withCloseButton={false}
            overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
            position="bottom"
            size="80%"
            opened={opened}
            onClose={close}>
            <Flex
                className="mb-14"
                direction="column"
                align="start"
                justify="center">
                <Typography className="self-start text-2xl font-display">
                    фильтры
                </Typography>
                <MySearchSettingsInputs inputs={filters} />
            </Flex>
        </Drawer>
    );
}
