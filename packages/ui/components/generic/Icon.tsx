import * as React from 'react';
import { IconContext, IconType } from 'react-icons';

interface IIcon {
  icon: IconType;
  size?: string;
  fontSize?: string | number;
  color?: string;
  title?: string;
}

export const Icon = ({icon, size='20px', fontSize = '20px', color = 'black'}: IIcon) => {
  return (
    <IconContext.Provider value={{ style: { fontSize, color }, size }}>
      <div>{icon}</div>
    </IconContext.Provider>
  );
};
