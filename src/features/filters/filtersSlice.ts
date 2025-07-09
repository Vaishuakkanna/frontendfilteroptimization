import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  mod350: number[];
  mod8000: number[];
  mod20002: number[];
}

const initialState: FiltersState = {
  mod350: [],
  mod8000: [],
  mod20002: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ key: keyof FiltersState; values: number[] }>) => {
      state[action.payload.key] = action.payload.values;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
