import { render, screen, waitFor } from '@testing-library/react';
import App from './App';


test('renders titles component page by default', async () => {
  render(<App/>)
  await waitFor(() => {
    expect(screen.getByText(/All Titles/i)).toBeInTheDocument()
  })
});
