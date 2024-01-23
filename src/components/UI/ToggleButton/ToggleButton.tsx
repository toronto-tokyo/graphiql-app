import { FC } from 'react';
import classes from './ToggleButton.module.css';

interface IToggleButtonProps {
  open: boolean;
  onClick: () => void;
}

const ToggleButton: FC<IToggleButtonProps> = ({ open, onClick }) => {
  return (
    <button
      className={`${classes.toggleButton} ${open ? classes.open : ''}`}
      onClick={onClick}
    />
  );
};

export default ToggleButton;
