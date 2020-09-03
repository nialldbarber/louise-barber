import {render, screen} from '@testing-library/react';
import About from 'pages/about';

describe('About Page', () => {
  it('renders about page heading', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {name: 'About page'})
    ).toBeInTheDocument();
  });
});
