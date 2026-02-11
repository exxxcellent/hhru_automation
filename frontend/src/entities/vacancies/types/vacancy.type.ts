export type Vacancy = {
    id: string;
    premium: boolean;
    billing_type: {
        id: string;
        name: string;
    };
    relations: []; // массив, тип элементов не указан в данных
    name: string;
    insider_interview: null | string; // предполагаем, что может быть строкой или null
    response_letter_required: boolean;
    area: {
        id: string;
        name: string;
        url: string;
    };
    salary: {
        from: number;
        to: number;
        currency: string;
        gross: boolean;
    };
    salary_range: {
        from: number;
        to: number;
        currency: string;
        gross: boolean;
        mode: {
            id: string;
            name: string;
        };
        frequency: {
            id: string;
            name: string;
        };
    };
    type: {
        id: string;
        name: string;
    };
    address: {
        building: string;
        can_edit: boolean;
        city: string;
        description: null | string;
        lat: number;
        lng: number;
        metro: null | string;
        metro_stations: string[];
        raw: string;
        street: string;
    };
    allow_messages: boolean;
    experience: {
        id: string;
        name: string;
    };
    schedule: {
        id: string;
        name: string;
    };
    employment: {
        id: string;
        name: string;
    };
    department: null; // в данных явно указано null
    show_contacts: boolean;
    contacts: null; // в данных явно указано null
    description: string;
    branded_description: null; // в данных явно указано null
    vacancy_constructor_template: null; // в данных явно указано null
    key_skills: []; // массив, тип элементов не указан в данных
    auto_response: {
        accept_auto_response: boolean;
    };
    accept_handicapped: boolean;
    accept_kids: boolean;
    age_restriction: {
        id: string;
        name: string;
    };
    archived: boolean;
    response_url: null; // в данных явно указано null
    specializations: []; // массив, тип элементов не указан в данных
    professional_roles: {
        id: string;
        name: string;
    }[];
    code: null; // в данных явно указано null
    hidden: boolean;
    quick_responses_allowed: boolean;
    driver_license_types: []; // массив, тип элементов не указан в данных
    accept_incomplete_resumes: boolean;
    employer: {
        id: string;
        name: string;
        url: string;
        alternate_url: string;
        logo_urls: {
            original: string;
            90: string;
            240: string;
        };
        vacancies_url: string;
        country_id: number;
        accredited_it_employer: boolean;
        trusted: boolean;
        is_identified_by_esia: boolean;
    };
    published_at: string; // формат ISO 8601
    created_at: string; // формат ISO 8601
    initial_created_at: string; // формат ISO 8601
    negotiations_url: null; // в данных явно указано null
    suitable_resumes_url: null; // в данных явно указано null
    apply_alternate_url: string;
    has_test: boolean;
    test: null; // в данных явно указано null
    alternate_url: string;
    working_days: []; // массив, тип элементов не указан в данных
    working_time_intervals: {
        id: string;
        name: string;
    }[];
    working_time_modes: []; // массив, тип элементов не указан в данных
    accept_temporary: boolean;
    languages: []; // массив, тип элементов не указан в данных
    approved: boolean;
    employment_form: {
        id: string;
        name: string;
    };
    fly_in_fly_out_duration: []; // массив, тип элементов не указан в данных
    accept_labor_contract: boolean;
    civil_law_contracts: {
        id: string;
        name: string;
    }[];
    internship: boolean;
    night_shifts: boolean;
    work_format: {
        id: string;
        name: string;
    }[];
    work_schedule_by_days: {
        id: string;
        name: string;
    }[];
    working_hours: {
        id: string;
        name: string;
    }[];
    show_logo_in_search: null | boolean; // в данных null, но возможно булево значение
    closed_for_applicants: boolean;
};
