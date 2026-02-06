import { useEffect, useState } from 'react';

interface Tokens {
    accessToken: string | null;
    refreshToken: string | null;
    expiresIn: string | null;
}

export const useTokens = () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const expiresIn = localStorage.getItem('expiresIn');

    const [tokens, setTokensState] = useState<Tokens>({
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
        expiresIn: localStorage.getItem('expiresIn'),
    });

    const deleteTokens = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('expiresIn');

        setTokensState({
            accessToken: null,
            refreshToken: null,
            expiresIn: null,
        });
    };

    const setTokens = (
        accessToken: string,
        refreshToken: string,
        expiresIn: number,
    ) => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('expiresIn', expiresIn.toString());

        setTokensState({
            accessToken,
            refreshToken,
            expiresIn: expiresIn.toString(),
        });
    };

    useEffect(() => {
        if (accessToken || refreshToken || expiresIn) {
            setTokensState({ accessToken, refreshToken, expiresIn });
        }
    }, [accessToken, refreshToken, expiresIn]);

    return {
        tokens,
        setTokens,
        deleteTokens,
    };
};
