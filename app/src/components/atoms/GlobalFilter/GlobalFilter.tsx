import React, { FC } from 'react';
import { useAsyncDebounce } from 'react-table';
import 'regenerator-runtime';

type Props = {
  preGlobalFilteredRows: any;
  globalFilter: any;
  setGlobalFilter: any;
};

export const GlobalFilter: FC<Props> = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: Props) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search ${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
          width: '32.5vw',
          textAlign: 'center',
          borderColor: 'black',
          borderWidth: '1px',
          borderRadius: '5px',
          borderStyle: 'solid',
        }}
      />
    </span>
  );
};
