import { render } from '@testing-library/react';
import HomeLayout from '..';

describe('<HomeLayout />', () => {
  it('should render the HomeLayout component correctly', () => {
    const { asFragment } = render(<HomeLayout>Test children</HomeLayout>);

    expect(asFragment).toMatchSnapshot();
  });
});
