import React from 'react';
import { ITypographyProps } from './typography.types';
import styles from './typography.module.scss';

export const Typography = ({
  label,
  font = 'roboto',
  weight = 400,
  color = 'black',
  letterSpacing = 0.02,
  primary,
  size,
  italic,
  className,
  hover,
  style,
  ...props
}: ITypographyProps) => {
  const classNames = [
    styles[font],
    italic && styles['italic'],
    primary && styles['primary'],
    hover && styles['hover'],
    className,
  ].join(' ');
  const textColor = primary ? 'transparent' : color;
  const inlineStyles = {
    fontWeight: weight,
    fontSize: `${size}rem`,
    letterSpacing: `${letterSpacing}em`,
    color: textColor,
    ...style,
  };
  return (
    <span className={classNames} style={inlineStyles} {...props}>
      {label}
    </span>
  );
};
