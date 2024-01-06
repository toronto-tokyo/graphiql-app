import { render, screen } from '@testing-library/react';
import EditorViewerSwitch from '../EditorViewerSwitch';
import userEvent from '@testing-library/user-event';

describe('EditorViewerSwitch tests', () => {
  it('EditorViewerSwitch renders without errors', () => {
    const handleChange = vi.fn();
    render(
      <EditorViewerSwitch value="" onChange={handleChange} readOnly={false} />
    );
  });
  it('EditorViewerSwitch renders with correct value', () => {
    const handleChange = vi.fn();
    const inputValue = 'test-text';
    render(
      <EditorViewerSwitch
        value={inputValue}
        onChange={handleChange}
        readOnly={false}
      />
    );
    expect(screen.getByDisplayValue(inputValue)).toBeInTheDocument();
  });
  it('EditorViewerSwitch calls onChange function, when user types', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    const typeText = 'test';
    render(
      <EditorViewerSwitch value="" onChange={handleChange} readOnly={false} />
    );
    await user.type(screen.getByRole('textbox'), typeText);
    expect(handleChange).toHaveBeenCalledTimes(typeText.length);
  });
});
