import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../app/config/axios';
import type { UserProfile } from '../types/user_profile.type';

const fetcher = async () => {
    const response = await apiClient.get('/user/me');
    return response.data;
};

export const useProfile = () => {
    const profile = useQuery<UserProfile>({
        queryKey: ['user', 'profile'],
        queryFn: fetcher,
    });

    return profile;
};
