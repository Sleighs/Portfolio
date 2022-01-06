import { render, screen } from '@testing-library/react';
import App from './App';

test('render test', () => {
  render(<App />);
  const linkElement = screen.getByText(/testing/i);
  expect(linkElement).toBeInTheDocument();
});
