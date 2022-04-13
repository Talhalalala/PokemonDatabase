import React, { FC, useState } from 'react';
import { useGlobalFilter, useAsyncDebounce } from 'react-table'
import 'regenerator-runtime/runtime';

type Props = {
    preGlobalFilteredRows: any, 
    globalFilter: any,
    setGlobalFilter: any
}


export const GlobalFilter: FC<Props> = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter}: Props) => {

    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return(
        <div>
            <input
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value)
                }}
                placeholder={`Search ${count} records...`}
            />
        </div>
    )
};