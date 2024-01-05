import { render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export const renderWithRouter = (
  element: ReactNode,
  path = '/'
): RenderResult => {
  const router = createMemoryRouter([{ path, element }]);
  return render(<RouterProvider router={router} />);
};
