import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';
import ApiProvider from './providers/api.provider';
import RouterProvider from './providers/router.provider';

export default function App() {
    return (
        <MantineProvider>
            <ApiProvider>
                <RouterProvider />
            </ApiProvider>
        </MantineProvider>
    );
}
