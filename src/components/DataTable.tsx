import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

import { DataRow } from '../types/DataRow'; 


// Define the component props
interface Props {
  data: DataRow[];
}

// Define table columns for DataRow
const columns: TableColumn<DataRow>[] = [
  {
    name: 'Number',
    selector: (row) => row.number,
    sortable: true,
  },
  {
    name: 'mod350',
    selector: (row) => row.mod350,
    sortable: true,
  },
  {
    name: 'mod8000',
    selector: (row) => row.mod8000,
    sortable: true,
  },
  {
    name: 'mod20002',
    selector: (row) => row.mod20002,
    sortable: true,
  },
];

const DataTableComponent: React.FC<Props> = ({ data }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="400px"
    />
  );
};

export default DataTableComponent;







