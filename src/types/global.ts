export type TemplateCategory = 'Health' | 'E-commerce' | 'Education';
export type TemplateOrder = 'Default' | 'Ascending' | 'Descending';

export interface Template {
  name: string;
  created: Date;
  category: TemplateCategory[];
  description: string;
  link: string;
}
