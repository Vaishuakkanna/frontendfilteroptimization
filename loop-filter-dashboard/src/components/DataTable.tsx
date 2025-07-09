import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataRow {
  number: number;
  mod3: number;
  mod4: number;
  mod5: number;
  mod6: number;
}

interface Props {
  data: DataRow[];
}

const columns: TableColumn<DataRow>[] = [
  { name: 'Number', selector: row => row.number, sortable: true },
  { name: 'mod3', selector: row => row.mod3, sortable: true },
  { name: 'mod4', selector: row => row.mod4, sortable: true },
  { name: 'mod5', selector: row => row.mod5, sortable: true },
  { name: 'mod6', selector: row => row.mod6, sortable: true },
];

const DataTableComponent: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ margin: '20px' }}>
      <DataTable
        title="Filtered Results"
        columns={columns}
        data={data}
        pagination
        paginationPerPage={100}
        fixedHeader
        fixedHeaderScrollHeight="400px"
        highlightOnHover
        dense
      />
    </div>
  );
};

export default DataTableComponent;
