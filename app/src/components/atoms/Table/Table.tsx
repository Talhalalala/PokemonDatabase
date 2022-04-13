import React, { FC } from 'react';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import { GlobalFilter } from '../GlobalFilter';


type Props = {
    columns: any, 
    data: any
}

export const Table: FC<Props> = ({ columns, data }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state, 
        visibleColumns, 
        preGlobalFilteredRows, 
        setGlobalFilter,
      } = useTable({
        columns,
        data,
      },
        useFilters,
        useGlobalFilter
      )

    return(
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                            <div>{column.canFilter ? column.render('Filter') : null}</div>
                        </th>
                    ))}
                </tr>
            ))}
            <tr>
                <th
                    colSpan={visibleColumns.length}
                >
                    <GlobalFilter 
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </th>
            </tr>
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
                )
            })}
            </tbody>
        </table>
  
    )
}

