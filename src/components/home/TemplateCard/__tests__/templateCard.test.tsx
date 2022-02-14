import { render } from '@testing-library/react';
import { Template } from 'types/global';
import TemplateCard from '..';

const template: Template = {
  category: ['Health', 'E-commerce', 'Education'],
  created: '2022-02-14T11:28:57.155463',
  description: 'Consectetur ullamco cupidatat veniam irure',
  link: 'https://formpl.us/templates',
  name: 'Test template',
};

describe('<TemplateCard />', () => {
  it('should render the TemplateCard component correctly', () => {
    const { asFragment } = render(<TemplateCard {...template} />);

    expect(asFragment).toMatchSnapshot();
  });
});
