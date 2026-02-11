import { Button, Flex, Typography } from '@mantine/core';
import {
    IconPlayerPauseFilled,
    IconPlayerPlayFilled,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { useFiltersStore } from '../store/useFiltersStore';

export default function MySearchButton() {
    const [isActive, setIsActive] = useState<boolean>(false);

    const filters = useFiltersStore((state) => state.filters);
    const search = useSearch(filters, isActive);

    const toggleActive = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <>
            <Button
                className="z-10"
                onClick={toggleActive}
                variant="transparent"
                color="dark">
                <Flex
                    align="center"
                    gap="md">
                    {isActive ? (
                        <IconPlayerPauseFilled />
                    ) : (
                        <IconPlayerPlayFilled />
                    )}
                    <Typography
                        className="font-display"
                        fz="h2"
                        fw="bold">
                        мой поиск
                    </Typography>
                </Flex>
            </Button>
        </>
    );
}
