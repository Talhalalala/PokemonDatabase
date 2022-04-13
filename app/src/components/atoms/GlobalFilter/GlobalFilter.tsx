import React, { FC } from 'react';
import { useAsyncDebounce } from 'react-table'

type Props = {
    preGlobalFilteredRows: any, 
    globalFilter: any, 
    setGlobalFilter: any
}

export const GlobalFilter: FC<Props> = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }: Props) => {

    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  

    return(
        <span>
            Search:{' '}
            <input
            value={value || ""}
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
            placeholder={`${count} records...`}
            style={{
                fontSize: '1.1rem',
                border: '0',
            }}
            />
        </span>
  
    )
};