import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {

    addToCart: (state, action) => {
    const existingItem = state.items.find((item) => item.id === action.payload.id)
      if(existingItem){
        existingItem.quantity += action.payload.quantity;
      } else{
      state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.items =  state.items.filter(item => item.id !== action.payload)
    },

    increaseQauntity: (state, action) => {
        const item = state.items.find(item => item.id === action.payload);
        if(item){
            item.quantity += 1;
        }
    },

    decreaseQauntity: (state, action) => {
        const item = state.items.find(item => item.id === action.payload);
        if(item && item.quantity > 1){
            item.quantity -= 1;
        }
    }
  },
});

export const { addToCart, removeFromCart, increaseQauntity, decreaseQauntity } = cartSlice.actions;
export default cartSlice.reducer;
