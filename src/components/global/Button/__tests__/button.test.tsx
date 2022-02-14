import { render, screen } from '@testing-library/react';
import Button from '..';

describe('<Button />', () => {
  it('should render the Button component correctly', () => {
    const { asFragment } = render(<Button>Test</Button>);

    expect(asFragment).toMatchSnapshot();
  });
  it('should render a spinner in the button when isLoading is true', () => {
    render(<Button isLoading>Test</Button>);

    const button = screen.queryByTestId('button');

    expect(button?.querySelector('svg')).toBeInTheDocument();
    expect(button).not.toHaveTextContent('Test');
  });
});
