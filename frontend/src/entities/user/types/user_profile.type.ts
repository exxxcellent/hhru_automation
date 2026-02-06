export interface UserProfile {
    auth_type: string;
    is_applicant: boolean;
    is_employer: boolean;
    is_admin: boolean;
    is_hiring_manager: boolean;
    is_application: boolean;
    is_employer_integration: boolean;
    crypted_id: string;
    id: string;
    is_anonymous: boolean;
    email: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    resumes_url: string;
    negotiations_url: string;
    is_in_search: boolean;
    mid_name: string;
    employer: null | any;
    manager: null | any;
    phone: string;
    counters: {
        new_resume_views: number;
        unread_negotiations: number;
        resumes_count: number;
    };
    profile_videos: {
        items: any[];
    };
    linked_socials: any[];
    underage_confirmed: boolean;
    personal_manager: null | any;
}
