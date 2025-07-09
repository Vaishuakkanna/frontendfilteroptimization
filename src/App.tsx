import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import DataTable, { TableColumn } from 'react-data-table-component';

// ✅ Define your row structure
type DataRow = {
  number: number;
  mod350: number;
  mod8000: number;
  mod20002: number;
};

const App: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);
  const [filterKey, setFilterKey] = useState<keyof DataRow>('mod350');
  const [filterValue, setFilterValue] = useState<number | 'All'>('All');
  const [uniqueValues, setUniqueValues] = useState<number[]>([]);

  // 📥 Load CSV on mount
  useEffect(() => {
    Papa.parse('/dataset_small.csv', {
      header: true,
      download: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = results.data as DataRow[];
        setData(parsed);
        setFilteredData(parsed);
        setUniqueValues(getUniqueValues(parsed, filterKey));
      },
    });
  }, []);

  // 🔁 Update unique values when key changes
  useEffect(() => {
    setUniqueValues(getUniqueValues(data, filterKey));
  }, [filterKey, data]);

  // 🔎 Update filtered data when value or key changes
  useEffect(() => {
    if (filterValue === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((row) => row[filterKey] === filterValue);
      setFilteredData(filtered);
    }
  }, [filterKey, filterValue, data]);

  // 🔢 Utility: Get unique sorted values
  const getUniqueValues = (data: DataRow[], key: keyof DataRow): number[] => {
    const unique = new Set<number>();
    data.forEach((row) => {
      const val = row[key];
      if (typeof val === 'number') unique.add(val);
    });
    return Array.from(unique).sort((a, b) => a - b);
  };

  // 📊 Table column definition
  const columns: TableColumn<DataRow>[] = [
    { name: 'Number', selector: (row) => row.number, sortable: true },
    { name: 'mod350', selector: (row) => row.mod350, sortable: true },
    { name: 'mod8000', selector: (row) => row.mod8000, sortable: true },
    { name: 'mod20002', selector: (row) => row.mod20002, sortable: true },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>CSV Filter Optimization</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="filterKey"><strong>Filter By:</strong> </label>
        <select
          id="filterKey"
          value={filterKey}
          onChange={(e) => setFilterKey(e.target.value as keyof DataRow)}
        >
          <option value="mod350">mod350</option>
          <option value="mod8000">mod8000</option>
          <option value="mod20002">mod20002</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="filterValue"><strong>Value:</strong> </label>
        <select
          id="filterValue"
          value={filterValue}
          onChange={(e) =>
            setFilterValue(e.target.value === 'All' ? 'All' : Number(e.target.value))
          }
        >
          <option value="All">All</option>
          {uniqueValues.map((val) => (
            <option key={val} value={val}>{val}</option>
          ))}
        </select>
      </div>

      <DataTable
        title="Filtered Table"
        columns={columns}
        data={filteredData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        highlightOnHover
        dense
      />
    </div>
  );
};

export default App;
