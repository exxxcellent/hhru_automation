type SearchElementType =
    | 'chip.checkbox'
    | 'chip.radio'
    | 'input'
    | 'input-range'
    | 'select';

interface SearchElementValue {
    id: string;
    name: string;
}

export interface SearchElement {
    key: string;
    type: SearchElementType;
    title?: string;
    placeholder?: string;
    values?: SearchElementValue[];
}
