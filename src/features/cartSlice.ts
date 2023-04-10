import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Honey{
    name: string| number;
    price: string | number;
    weight: string | number;
}

export interface CartState {
  items: Honey[];
}

const initialState: CartState = {
  items: []
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setEmpty: (state) => {
      state.items = null;
    },
    addItem: (state, action: PayloadAction<Honey>) => {
        state.items.push(action.payload);
    }
  },
});

// Action creators are generated for each case reducer function
export const { setEmpty, addItem } = userSlice.actions;

export default userSlice.reducer;
