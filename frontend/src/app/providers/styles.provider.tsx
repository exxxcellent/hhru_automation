import { createTheme, MantineProvider } from '@mantine/core';

interface StylesProviderProps {
    children: React.ReactNode;
}

const theme = createTheme({
    primaryColor: 'dark',
});

export default function StylesProvider({ children }: StylesProviderProps) {
    return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
