import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type DataRow = {
  number: number;
  mod350: number;
  mod8000: number;
  mod20002: number;
};

interface TableState {
  data: DataRow[];
}

const initialState: TableState = {
  data: [],
};

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

