export const createQuery = (filters: Record<string, any>): string => {
    const result: Record<string, any> = {
        ...filters,
    };

    const queryParams: string[] = [];

    Object.keys(result).forEach((key) => {
        const value = result[key];

        if (value !== undefined && value !== null && value !== '') {
            if (Array.isArray(value)) {
                queryParams.push(`${key}=${value.join(',')}`);
            } else {
                queryParams.push(`${key}=${value}`);
            }
        }
    });

    return queryParams.join('&');
};
