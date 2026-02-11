import { Box, Button, Flex, Image, Typography } from '@mantine/core';
import { IconArrowRight, IconCheck, IconMap } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import type { Vacancy } from '../types/vacancy.type';

interface VacancyItemProps {
    data: Vacancy;
}

export default function VacancyItem({ data }: VacancyItemProps) {
    const link = `http://hh.ru/vacancy/${data.id}`;

    return (
        <Button
            radius="md"
            variant="light"
            className="!w-full !flex justify-start !p-3 !min-h-max">
            <Link
                to={link}
                target="_blank">
                <IconArrowRight className="min:size-8 !absolute bottom-3 right-3" />
                <Flex
                    direction="column"
                    gap="4"
                    align="start">
                    <Flex
                        align="center"
                        justify="space-between">
                        <Typography className="text-left text-wrap text-xl font-bold">
                            {data.name}
                        </Typography>
                    </Flex>
                    {data.salary && (
                        <Typography className="font-black uppercase text-xl">
                            {data.salary.from} {data.salary.currency}
                        </Typography>
                    )}
                    {!data.salary && (
                        <Typography className="font-bold text-lg">
                            З/п не указана
                        </Typography>
                    )}
                    <Flex
                        align="center"
                        gap="xs">
                        {data.employer.logo_urls && (
                            <Image
                                src={data.employer.logo_urls[90]}
                                className="!size-8 rounded-full"
                            />
                        )}

                        <Flex
                            align="center"
                            gap="4">
                            <Typography>{data.employer.name}</Typography>
                            {data.employer.trusted && (
                                <Box className="size-4 flex place-items-center bg-blue-500 text-white rounded-full">
                                    <IconCheck className="h-3" />
                                </Box>
                            )}
                        </Flex>
                    </Flex>
                    <Flex
                        align="center"
                        gap={4}>
                        <IconMap className="size-6" />
                        <Typography className="text-sm font-bold text-ellipsis">
                            {data.address.city}
                        </Typography>
                    </Flex>
                    <Flex
                        className="w-5/12 h-full"
                        align="center"
                        justify="start"
                        wrap="wrap"
                        gap="4">
                        {data.experience && (
                            <Box className="bg-[var(--mantine-color-dark-light)] py-1 px-2 rounded-full text-xs text-gray-700">
                                {data.experience.name}
                            </Box>
                        )}
                        {data.schedule && (
                            <Box className="bg-[var(--mantine-color-dark-light)] py-1 px-2 rounded-full text-xs text-gray-700">
                                {data.schedule.name}
                            </Box>
                        )}
                        {data.internship && (
                            <Box className="bg-[var(--mantine-color-dark-light)] py-1 px-2 rounded-full text-xs text-gray-700">
                                {data.internship}
                            </Box>
                        )}
                        {data.work_schedule_by_days &&
                            data.work_schedule_by_days.map((item) => (
                                <Box className="bg-[var(--mantine-color-dark-light)] py-1 px-2 rounded-full text-xs text-gray-700">
                                    {item.name}
                                </Box>
                            ))}
                        {data.work_format &&
                            data.work_format.map((item) => (
                                <Box className="bg-[var(--mantine-color-dark-light)] py-1 px-2 rounded-full text-xs text-gray-700">
                                    {item.name}
                                </Box>
                            ))}
                    </Flex>
                </Flex>
            </Link>
        </Button>
    );
}
