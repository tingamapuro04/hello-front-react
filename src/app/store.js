import { configureStore } from '@reduxjs/toolkit';
import localApiData from '../features/dataasync/dataSlice';

const store = configureStore({
  reducer: {
    apidata: localApiData,
  },
});

export default store;
