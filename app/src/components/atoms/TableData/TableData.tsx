import React, { FC } from 'react';

type Props = {
  heading: string;
};

export const TableData: FC<Props> = ({ children, heading }) => {
  return (
    <p>
      {heading}: {children}
    </p>
  );
};
