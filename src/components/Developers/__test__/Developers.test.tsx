import { render, screen } from '@testing-library/react';
import { Developers } from '../Developers';

describe('DeveloperCard component tests', () => {
  it('component renders without errors', () => {
    render(<Developers />);
  });
  it('component renders with correct amount of items', () => {
    render(<Developers />);
    expect(screen.getAllByTestId('avatar')).toHaveLength(5);
  });
});
