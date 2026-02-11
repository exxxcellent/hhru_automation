import '@mantine/core/styles.css';
import './index.css';
import ApiProvider from './providers/api.provider';
import RouterProvider from './providers/router.provider';
import StylesProvider from './providers/styles.provider';

export default function App() {
    return (
        <StylesProvider>
            <ApiProvider>
                <RouterProvider />
            </ApiProvider>
        </StylesProvider>
    );
}
