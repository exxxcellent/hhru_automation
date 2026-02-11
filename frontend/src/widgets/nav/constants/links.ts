import { IconSearch, IconSettings, IconUser } from '@tabler/icons-react';
import type { NavLink } from '../types/link.type';

export const links: NavLink[] = [
    {
        to: '/',
        title: 'Автопоиск',
        leftIcon: IconSearch,
    },
    {
        to: '/profile',
        title: 'Профиль',
        leftIcon: IconUser,
    },
    {
        to: '/settings',
        title: 'Настройки',
        leftIcon: IconSettings,
    },
];
