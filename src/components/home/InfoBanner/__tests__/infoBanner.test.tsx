import { render } from '@testing-library/react';
import InfoBanner from '..';

describe('<InfoBanner />', () => {
  it('should render the InfoBanner component correctly', () => {
    const { asFragment } = render(<InfoBanner />);

    expect(asFragment).toMatchSnapshot();
  });
});
