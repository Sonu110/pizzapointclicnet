import { createSlice } from '@reduxjs/toolkit';

// Load cart state from session storage on store initialization
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

// Save cart state to session storage after each action
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch {
    // Ignore write errors
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadState() || {
    items: [],
    totalPrice: 0,
    discountAmount: 0,
    discountedTotal: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      state.discountAmount = (0.75 * state.totalPrice).toFixed(2);
      state.discountedTotal = (state.totalPrice - state.discountAmount).toFixed(2);
      saveState(state); // Save state to session storage
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex(item => item._id === id);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
        state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        state.discountAmount = (0.75 * state.totalPrice).toFixed(2);
        state.discountedTotal = (state.totalPrice - state.discountAmount).toFixed(2);
        saveState(state); 
      }
    },

    emptycart:(state, action) => {
    
      state.items=[]
      state.totalPrice=0
      state.discountAmount=0
      state.discountedTotal=0
      saveState(state)
    }





  },
});

export const { addItem, removeItem , emptycart} = cartSlice.actions;

export default cartSlice.reducer;
