import { GlobalFilter } from 'components/atoms/GlobalFilter';
import React, { FC, useState } from 'react';
import { useTable, useFilters, useSortBy, useGlobalFilter } from 'react-table';

type Props = {
  columns: any;
  // data: {
  //     id: number,
  //     ability: string,
  //     description: string
  // }
  data: any;
  search: any;
};

export const AbilityT: FC<Props> = ({ columns, data, search }) => {
  const [filterInput, setFilterInput] = useState('');

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { globalFilter },
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy
  );

  const handleFilterChange = (e: any) => {
    const value = e.target.value || undefined;
    setFilter('name', value);
    setFilterInput(value);
  };

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          <tr>
            <th colSpan={visibleColumns.length}>
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>

          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onMouseOver={search}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
