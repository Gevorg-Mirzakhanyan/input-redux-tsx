import { configureStore } from '@reduxjs/toolkit';
import textReducer from '../features/title/textSlice';

export const store = configureStore({
  reducer: {
    text: textReducer,
  },
});
