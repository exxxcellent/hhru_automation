import { Flex, Typography } from '@mantine/core';
import { IconMoodCry } from '@tabler/icons-react';
import type { Vacancy } from '../types/vacancy.type';
import VacancyItem from './item';

interface VacanciesListProps {
    data: Vacancy[];
}

export default function VacanciesList({ data }: VacanciesListProps) {
    return (
        <Flex
            justify="center"
            align="center"
            direction="column"
            gap="sm"
            className="w-full">
            <Typography className="self-start text-2xl font-display">
                результаты поиска
            </Typography>
            {data.length === 0 && (
                <Flex
                    direction="column"
                    align="center">
                    <IconMoodCry className="size-28 text-[#2E2E2E]" />
                    <Typography>
                        Начните поиск, и тут что-то появится
                    </Typography>
                </Flex>
            )}
            {data && (
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    className="w-full mb-5"
                    gap="sm">
                    {data.map((item) => (
                        <VacancyItem
                            key={item.id}
                            data={item}
                        />
                    ))}
                </Flex>
            )}
        </Flex>
    );
}
