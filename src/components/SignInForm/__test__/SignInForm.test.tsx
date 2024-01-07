import { screen } from '@testing-library/react';
import SignInForm from '../SignInForm';
import { renderWithRouter } from '../../../test/utils';

describe('SignInForm tests', () => {
  it('SignInForm renders without errors', () => {
    renderWithRouter(<SignInForm />);
  });
  it('Submit button is disabled by default', async () => {
    renderWithRouter(<SignInForm />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
