import { render, screen } from '@testing-library/react';
import { Developers } from '../Developers';
import { DEVELOPERS_DATA } from '../../../shared/developers-data';

describe('DeveloperCard component tests', () => {
  it('component renders without errors', () => {
    render(<Developers />);
  });
  it('component renders with correct amount of items', () => {
    render(<Developers />);
    expect(screen.getAllByRole('img')).toHaveLength(DEVELOPERS_DATA.length);
  });
});
