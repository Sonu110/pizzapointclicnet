import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    discountAmount: 0,
    discountedTotal: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price;
      state.discountAmount = (0.75 * state.totalPrice).toFixed(2); // Example discount logic
      state.discountedTotal = (state.totalPrice - state.discountAmount).toFixed(2);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state.totalPrice -= state.items[itemIndex].price;
        state.items.splice(itemIndex, 1);
        state.discountAmount = (0.75 * state.totalPrice).toFixed(2); // Example discount logic
        state.discountedTotal = (state.totalPrice - state.discountAmount).toFixed(2);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
