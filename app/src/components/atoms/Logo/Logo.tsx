import React, { FC } from 'react';

type Props = {};

export const Logo: FC<Props> = (props) => {
  const logo =
    'https://www.kindpng.com/picc/m/2-24125_pokemon-logo-transparent-hd-png-download.png';
  return (
    <div>
      <img src={logo} />
    </div>
  );
};
