import { render } from '@testing-library/react';
import Button from '..';

describe('<Button />', () => {
  it('should render the button content correctly', () => {
    const { asFragment } = render(<Button>Hey</Button>);

    expect(asFragment).toMatchSnapshot();
  });
});
