import { Flex } from '@mantine/core';
import MySearchButton from './my_search_button';
import MySearchSettingsButton from './my_search_settings_button';

export default function MySearch() {
    return (
        <Flex
            className="w-full min-h-3/6"
            direction="column"
            align="center"
            justify="center"
            gap="sm">
            <MySearchButton />
            <MySearchSettingsButton />
        </Flex>
    );
}
