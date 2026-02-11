export interface UseFiltersStore {
    filters: Record<string, string | string[]>;
    setFilter: (key: string, value: string | string[]) => void;
    getFilter: (key: string) => string | string[];
}
