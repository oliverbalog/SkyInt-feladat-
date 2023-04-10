import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userName: string;
}

const initialState: UserState = {
  userName: null,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logout: (state) => {
      state.userName = null;
    },
    login: (state, action: PayloadAction<string>) => {
        state.userName = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { logout, login } = userSlice.actions;

export default userSlice.reducer;
