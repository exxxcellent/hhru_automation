import { Flex } from '@mantine/core';
import type { SearchElement } from '../types/search_element.type';
import MySearchSettingsInput from './my_search_settings_input';

interface MySearchSettingsInputsProps {
    inputs: SearchElement[];
}

export default function MySearchSettingsInputs({
    inputs,
}: MySearchSettingsInputsProps) {
    return (
        <Flex
            className="w-full"
            direction="column"
            align="center"
            justify="center"
            gap="xs">
            {inputs.map((input) => (
                <MySearchSettingsInput input={input} />
            ))}
        </Flex>
    );
}
