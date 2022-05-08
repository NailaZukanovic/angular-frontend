export interface FormConfig {
    [control: string]: {
        type?: 'text' | 'password' | 'file' | 'location' | 'select' | 'date', 
        validation?: 'none' | 'required' | 'positive-integer',
        options?: any,
        optionValue?: string
        optionKey?: string
        static?: boolean
    }
}

export interface FormStyle {
    width?: string;
    'margin-top'?: string;
}
