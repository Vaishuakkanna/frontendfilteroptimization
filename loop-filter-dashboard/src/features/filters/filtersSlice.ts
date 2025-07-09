import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  mod3: number[];
  mod4: number[];
  mod5: number[];
  mod6: number[];
}

const initialState: FiltersState = {
  mod3: [], mod4: [], mod5: [], mod6: []
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
