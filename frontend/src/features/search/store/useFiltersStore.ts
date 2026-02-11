import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { UseFiltersStore } from '../types/useFiltersStore.type';

export const useFiltersStore = create<UseFiltersStore>()(
    devtools(
        persist(
            (set, get) => ({
                filters: {},
                setFilter: (key, value) => {
                    set((state) => ({
                        filters: {
                            ...state.filters,
                            [key]: value,
                        },
                    }));
                },
                getFilter: (key) => get().filters[key],
            }),
            {
                name: 'filters',
            },
        ),
    ),
);
