import { render, screen } from '@testing-library/react';
import SignUpForm from '../SignUpForm';

describe('SignUpForm tests', () => {
  it('SignUpForm renders without errors', () => {
    render(<SignUpForm />);
  });
  it('Submit button is disabled by default', async () => {
    render(<SignUpForm />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
