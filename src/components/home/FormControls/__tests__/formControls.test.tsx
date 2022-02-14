import { render } from 'utils/testUtils';
import store from 'redux/store';
import FormControls from '..';

describe('<FormControls />', () => {
  it('should render the FormControls component correctly', () => {
    const { asFragment } = render(<FormControls />, {
      preloadedState: {},
      store,
    });

    expect(asFragment).toMatchSnapshot();
  });
});
