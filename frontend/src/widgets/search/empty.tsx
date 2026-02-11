import { Flex, Image, Typography } from '@mantine/core';

export default function EmptyStateMain() {
    return (
        <Flex
            className="size-full"
            align="center"
            justify="center"
            direction="column"
            gap="sm">
            <Flex
                gap="sm"
                justify="center">
                <Typography className="text-center !text-4xl leading-tight font-display">
                    привет!
                </Typography>
                <Image
                    w="48px"
                    src="/icons/hello.svg"
                />
            </Flex>
            <Typography
                className="text-center"
                fz="md">
                На этой странице ты будешь видеть результат действий программы
            </Typography>
        </Flex>
    );
}
