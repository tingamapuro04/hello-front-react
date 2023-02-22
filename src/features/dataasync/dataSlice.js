import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getApiData = createAsyncThunk('messages/getApiData', async () => {
  const response = await fetch('http://localhost:3000/api/v1/messages');
  const data = await response.json();
  return data;
});

const apiSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApiData.pending, (state) => {
        const newState = state;
        newState.status = 'loading';
      })
      .addCase(getApiData.fulfilled, (state, action) => {
        const newState = state;
        newState.status = 'succeeded';
        newState.data = action.payload;
      })
      .addCase(getApiData.rejected, (state, action) => {
        const newState = state;
        newState.status = 'failed';
        newState.error = action.error.message;
      });
  },
});

const localApiData = apiSlice.reducer;
export default localApiData;
