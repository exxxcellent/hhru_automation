import { Flex } from '@mantine/core';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
    component: Layout,
});

export default function Layout() {
    return (
        <Flex
            className="max-w-screen min-h-screen !font-body"
            p="lg">
            <Outlet />
        </Flex>
    );
}
