import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { UseVacanciesStore } from '../types/useVacanciesStore.type';

export const useVacanciesStore = create<UseVacanciesStore>()(
    devtools(
        persist(
            (set) => ({
                vacancyIds: [],
                pushVacancyId: (vacancyId) => {
                    set((state) => ({
                        vacancyIds: [vacancyId, ...state.vacancyIds],
                    }));
                },
            }),
            {
                name: 'vacancyIds',
            },
        ),
    ),
);
