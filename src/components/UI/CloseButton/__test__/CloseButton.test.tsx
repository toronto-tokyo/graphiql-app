import { render, screen } from '@testing-library/react';
import CloseButton from '../CloseButton';

describe('CloseButton component', () => {
  it('CloseButton component has passed aria-label attribute', () => {
    const handleClick = vi.fn();
    render(<CloseButton ariaLabel="close" clickHandler={handleClick} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'close');
  });
  it('img inside CloseButton component has close-btn alt text', () => {
    const handleClick = vi.fn();
    render(<CloseButton ariaLabel="close" clickHandler={handleClick} />);
    expect(screen.getByAltText('close-btn')).toBeInTheDocument();
  });
});
