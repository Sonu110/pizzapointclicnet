import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/Cartslier';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
