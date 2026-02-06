import {
    createFileRoute,
    useNavigate,
    useSearch,
} from '@tanstack/react-router';
import { useEffect } from 'react';
import { apiClient } from '../../app/config/axios';
import { useTokens } from '../../shared/hooks/useTokens';

export const Route = createFileRoute('/auth/oauth')({
    component: RouteComponent,
});

function RouteComponent() {
    const search = useSearch({ from: '/auth/oauth' });
    const navigate = useNavigate();

    const { setTokens } = useTokens();

    const auth = async () => {
        const response = await apiClient.post(
            `/auth/oauth?code=${search.code}`,
        );
        setTokens(
            response.data.access_token,
            response.data.refresh_token,
            response.data.expires_in,
        );
        navigate({ to: '/' });
    };

    useEffect(() => {
        auth();
    }, []);
}
