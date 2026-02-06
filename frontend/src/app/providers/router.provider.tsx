import {
    createRouter,
    RouterProvider as TanstackRouterProvider,
} from '@tanstack/react-router';
import { routeTree } from '../../routeTree.gen';

export const router = createRouter({
    routeTree,
});

export default function RouterProvider() {
    return (
        <>
            <TanstackRouterProvider router={router} />
            {/* <TanStackRouterDevtools router={router} /> */}
        </>
    );
}
