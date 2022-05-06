export interface FormConfig {
    [control: string]: {
        type?: 'text' | 'password' | 'file' | 'location' | 'select',
        validation?: 'none' | 'required' | 'positive-integer',
        options?: string[]
    }
}

export interface FormStyle {
    width?: string;
    'margin-top'?: string;
}
