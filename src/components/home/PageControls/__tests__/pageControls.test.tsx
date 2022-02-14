import store from 'redux/store';
import { render } from 'utils/testUtils';
import PageControls from '..';

describe('<PageControls />', () => {
  it('should render the PageControls component correctly', () => {
    const { asFragment } = render(<PageControls />, {
      preloadedState: {},
      store,
    });

    expect(asFragment).toMatchSnapshot();
  });
});
