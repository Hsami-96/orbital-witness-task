import { render, screen } from '@testing-library/react';
import App from './App';


test('renders titles component page by default', () => {
  render(<App/>)
  expect(screen.getByText(/All Titles/i)).toBeInTheDocument()
});
