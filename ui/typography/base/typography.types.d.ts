import { HTMLAttributes } from 'react';

type Fonts = 'roboto' | 'poppins';
type Weights = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface ITypographyProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  font?: Fonts;
  weight?: Weights;
  italic?: boolean;
  color?: string;
  primary?: boolean;
  size?: number;
  letterSpacing?: number;
  hover?: boolean;
}
