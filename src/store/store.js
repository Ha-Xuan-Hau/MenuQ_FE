import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import appReducer from './app/appSlice';
import addressReducer from './address/addressSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appReducer,
    address: addressReducer,
  },
});

export default store;
