import { ChangeEvent } from 'react';

export interface InputStringProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
