import { render, screen } from '@testing-library/react';
import { MockTabs } from './mockData';
import Tabs from '../Tabs';

describe('Test Tabs component', () => {
  it('Component renders passed items count', () => {
    const handleClick = vi.fn();
    render(
      <Tabs tabs={MockTabs} selectedId={MockTabs[0].id} onClick={handleClick} />
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(MockTabs.length);
  });
  it('Component assigns active className for selected list item', () => {
    const handleClick = vi.fn();
    render(
      <Tabs tabs={MockTabs} selectedId={MockTabs[0].id} onClick={handleClick} />
    );
    expect(
      screen.getByText(MockTabs[0].label).className.includes('active')
    ).toBe(true);
  });
});
