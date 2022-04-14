import React, { FC } from 'react';
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table'
import { GlobalFilter } from '../GlobalFilter';
import styles from '../../../../styles/atoms/table.module.css'


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
        useGlobalFilter,
        useSortBy
      )

    return(
        <table className={styles.table} {...getTableProps()}>
            <thead className={styles.header}>
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

                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className={styles.cell}{...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' 🔽'
                                        : ' 🔼'
                                    : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className={styles.body} {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return <td className={styles.cell} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
                )
            })}
            </tbody>
        </table>
  
    )
}

