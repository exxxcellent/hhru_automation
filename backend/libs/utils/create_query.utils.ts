export const createQuery = (filters: Record<string, any>): string => {
    const result: Record<string, any> = {
        ...filters,
    };

    const queryParams: string[] = [];

    Object.keys(result).forEach((key) => {
        const value = result[key];

        if (value !== undefined && value !== null && value !== '') {
            let valuesToProcess: any[] = [];

            if (Array.isArray(value)) {
                valuesToProcess = value;
            } else if (typeof value === 'string' && value.includes(',')) {
                valuesToProcess = value.split(',');
            } else {
                valuesToProcess = [value];
            }

            valuesToProcess.forEach((item) => {
                queryParams.push(`${key}=${item}`);
            });
        }
    });

    return queryParams.join('&');
};
