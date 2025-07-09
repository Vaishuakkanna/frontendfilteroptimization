import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataRow {
  number: number;
  mod3: number;
  mod4: number;
  mod5: number;
  mod6: number;
}

interface TableState {
  data: DataRow[];
}

const initialState: TableState = { data: [] };

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataRow[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = tableSlice.actions;
export default tableSlice.reducer;
