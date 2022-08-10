import * as React from 'react';
import { getStyleSettings, StyleVariant, DEFAULT_STYLE } from '../../src/constants/styles';
import { CssSize } from '../../src/types/sizes';

interface IIcon {
  children: JSX.Element,
  styleVariant?: StyleVariant;
  fontSize?: CssSize | number;
  color?: string;
  tooltip?: string;
}

export const Icon = ({ children, styleVariant, tooltip, ...styleOverride }: IIcon) => {
  const style = {
    ...(styleVariant ? getStyleSettings(styleVariant) : DEFAULT_STYLE),
    ...styleOverride,
  };

  return <div style={style}>
    {children}
  </div>;
};
