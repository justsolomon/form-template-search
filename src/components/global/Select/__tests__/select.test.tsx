import { render, screen } from '@testing-library/react';
import Select from '..';

describe('<Select />', () => {
  it('should render the Select component correctly', () => {
    const { asFragment } = render(
      <Select label="Test" options={['TestOption1', 'TestOption2']}>
        Hey
      </Select>,
    );

    expect(asFragment).toMatchSnapshot();
  });
  it('should render all the options passed into it', () => {
    render(
      <Select label="Test" options={['TestOption1', 'TestOption2']}>
        Hey
      </Select>,
    );

    const selectInput = screen.queryByTestId('select');
    expect(selectInput?.querySelectorAll('option').length).toBe(2);
  });
});
