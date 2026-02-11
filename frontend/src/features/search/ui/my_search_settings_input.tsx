import { Chip, Flex, Group, TextInput, Typography } from '@mantine/core';
import { useState } from 'react';
import { useFiltersStore } from '../store/useFiltersStore';
import type { SearchElement } from '../types/search_element.type';

interface MySearchSettingsInputProps {
    input: SearchElement;
}

export default function MySearchSettingsInput({
    input,
}: MySearchSettingsInputProps) {
    const setFilter = useFiltersStore((state) => state.setFilter);
    const getFilter = useFiltersStore((state) => state.getFilter);

    const [value, setValue] = useState<string | string[]>(getFilter(input.key));

    const onChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
    ) => {
        setValue(e.target.value);
        setFilter(input.key, e.target.value);
    };

    const onChangeChipHandler = (e: string | string[]) => {
        setValue(e);
        setFilter(input.key, e);
    };

    switch (input.type) {
        case 'input': {
            return (
                <Flex
                    className="w-full"
                    direction="column"
                    align="center"
                    justify="center"
                    gap="xs">
                    <Typography className="self-start text-md font-bold">
                        {input.title}
                    </Typography>
                    <TextInput
                        value={value}
                        onChange={(e) => onChangeHandler(e)}
                        className="w-full"
                        radius="md"
                        variant="filled"
                        placeholder={input.placeholder}
                    />
                </Flex>
            );
        }
        case 'chip.checkbox':
        case 'chip.radio': {
            return (
                <Flex
                    className="w-full"
                    direction="column"
                    align="center"
                    justify="center">
                    <Typography className="self-start text-md font-bold ">
                        {input.title}
                    </Typography>
                    <Chip.Group
                        multiple={input.type === 'chip.checkbox'}
                        value={value}
                        onChange={(e) => onChangeChipHandler(e)}>
                        <Group
                            gap="xs"
                            justify="start"
                            wrap="nowrap"
                            className="w-full overflow-auto py-3 px-1 scrollbar-hidden">
                            {input.values?.map((item) => (
                                <Chip
                                    size="md"
                                    variant="filled"
                                    color="dark"
                                    value={item.id}>
                                    {item.name}
                                </Chip>
                            ))}
                        </Group>
                    </Chip.Group>
                </Flex>
            );
        }
    }
}
