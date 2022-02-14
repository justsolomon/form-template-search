export type TemplateCategory = 'Health' | 'E-commerce' | 'Education';
export type TemplateOrder = 'Default' | 'Ascending' | 'Descending';

export interface Template {
  name: string;
  created: string;
  category: TemplateCategory[];
  description: string;
  link: string;
}

export interface QueryError<ErrorType = null> {
  data?: ErrorType;
  error: string;
}
