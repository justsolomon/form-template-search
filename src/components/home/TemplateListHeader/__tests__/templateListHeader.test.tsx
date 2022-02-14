import { render } from '@testing-library/react';
import TemplateListHeader from '..';

describe('<TemplateListHeader />', () => {
  it('should render the TemplateListHeader component correctly', () => {
    const { asFragment } = render(
      <TemplateListHeader category="All" numOfTemplates={5} />,
    );

    expect(asFragment).toMatchSnapshot();
  });
});
