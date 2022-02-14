import { render } from '@testing-library/react';
import Input from '..';

describe('<Input />', () => {
  it('should render the Input component correctly', () => {
    const { asFragment } = render(
      <Input defaultValue="Test input" placeholder="Test placeholder" />,
    );

    expect(asFragment).toMatchSnapshot();
  });
});
