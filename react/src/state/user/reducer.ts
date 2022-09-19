import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ConnectionType } from 'connection';

export interface UserState {
  selectedWallet?: ConnectionType;
}

export const initialState: UserState = {
  selectedWallet: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateSelectedWallet(state, { payload }: PayloadAction<{ wallet: ConnectionType }>) {
      state.selectedWallet = payload.wallet;
    },
  },
});

export const { updateSelectedWallet } = userSlice.actions;
export default userSlice.reducer;
