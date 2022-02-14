import { render, screen } from '@testing-library/react';
import { Template } from 'types/global';
import TemplateCardList from '..';

const templates: Template[] = new Array(5).fill({
  category: ['Health', 'E-commerce', 'Education'],
  created: '2022-02-14T11:28:57.155463',
  description: 'Consectetur ullamco cupidatat veniam, irure',
  link: 'https://formpl.us/templates',
  name: 'Test template',
});

describe('<TemplateCardList />', () => {
  it('should render the TemplateCardList component correctly', () => {
    const { asFragment } = render(<TemplateCardList templates={templates} />);

    expect(asFragment).toMatchSnapshot();
  });
  it('should render all the templates passed into it', () => {
    render(<TemplateCardList templates={templates} />);

    const templateList = screen.queryByTestId('template-card-list');

    expect(templateList?.querySelectorAll('li').length).toBe(5);
  });
});
