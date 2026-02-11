import type { SearchElement } from '../types/search_element.type';
import { useDictionaries } from './useDictionaries';
import { useLocales } from './useLocales';

export const useFilters = () => {
    const dictionaries = useDictionaries();
    const locales = useLocales();

    const filters: SearchElement[] = [
        {
            key: 'text',
            type: 'input',
            placeholder: 'Должность, ключевые слова',
        },
        {
            key: 'search_field',
            type: 'chip.checkbox',
            title: 'Искать в',
            values: dictionaries.data?.vacancy_search_fields,
        },
        {
            key: 'education',
            type: 'chip.checkbox',
            title: 'Образование',
            values: dictionaries.data?.education_level,
        },
        {
            key: 'employment_form',
            type: 'chip.checkbox',
            title: 'Тип занятости',
            values: dictionaries.data?.employment,
        },
        {
            key: 'experience',
            type: 'chip.radio',
            title: 'Опыт работы',
            values: dictionaries.data?.experience,
        },
        {
            key: 'work_format',
            type: 'chip.radio',
            title: 'Формат работы',
            values: dictionaries.data?.work_format,
        },
        {
            key: 'work_schedule_by_days',
            type: 'chip.checkbox',
            title: 'График работы',
            values: dictionaries.data?.work_schedule_by_days,
        },
        {
            key: 'locales',
            type: 'chip.checkbox',
            title: 'Язык',
            values: locales.data,
        },
    ];

    return filters;
};
