import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { setData } from './features/table/tableSlice';
import { loadCSV } from './utils/loadCSV';
import FilterDropdown from './components/FilterDropdown';
import DataTableComponent from './components/DataTable';

function App() {
  const dispatch = useDispatch();
  const fullData = useSelector((state: RootState) => state.table.data);
  const [selectedMod3, setSelectedMod3] = useState<number[]>([]);
  const [filteredData, setFilteredData] = useState(fullData);

  useEffect(() => {
    loadCSV('/dataset_small.csv').then((data: any[]) => {
      const parsed = data.map((row) => ({
        number: Number(row.number),
        mod3: Number(row.mod3),
        mod4: Number(row.mod4),
        mod5: Number(row.mod5),
        mod6: Number(row.mod6),
      }));
      dispatch(setData(parsed));
    });
  }, [dispatch]);

  useEffect(() => {
    if (selectedMod3.length === 0) {
      setFilteredData(fullData);
    } else {
      const filtered = fullData.filter((row) => selectedMod3.includes(row.mod3));
      setFilteredData(filtered);
    }
  }, [selectedMod3, fullData]);

  return (
    <div className="App">
      <h1>Front-End Filter Optimization</h1>
      <FilterDropdown
        title="mod3"
        options={[0, 1, 2]}
        selected={selectedMod3}
        onChange={(values: number[]) => setSelectedMod3(values)}
      />
      <DataTableComponent data={filteredData} />
    </div>
  );
}

export default App;
