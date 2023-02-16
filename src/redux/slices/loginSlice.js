import { createSlice } from '@reduxjs/toolkit';
import services from '../../services';

const initialState = {
    data:null
}
export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginAction: (state) => {
      state.data = 1
    },
  },
  extraReducers: {
    [services.Login.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    },
    [services.Login.rejected]: (state, action) => {
     state.data = null;
    },
  },
})

export const { loginAction } = login.actions

export default login.reducer