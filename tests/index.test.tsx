import { render, screen, waitFor } from '@testing-library/react';

import Index from '../pages/index';

test('renders a sketch canvas correctly', async () => {
  render(<Index />);
  await waitFor(() => screen.getByTestId('sketch'));
  expect(screen.getByTestId('sketch')).toBeInTheDocument();
});
