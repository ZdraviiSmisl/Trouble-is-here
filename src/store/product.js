import { createSlice } from "@reduxjs/toolkit";

const initialProductState = { totalQuantity: 0, items: [] };

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    //In oreder to avaoid sprawling the reducer component  I put this method here wich repleces the cart with new one cart has been created in the component
    replaceCart(state, action) {
      //update state in poduct
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addNewProduct(state, action) {
      const newItem = action.payload;
      //no metter wethere we add new item or increze it's quantity we almast shoult increase totalQuantity.
      state.totalQuantity++; //???
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItem(state, action) {
      //Here I found existing item
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      //it's the same for decreathe as it's for increase
      state.totalQuantity--;
      //if quantity of exiting item equal to 1 I filtered items array by passing id from the action object  and reassign it to the items array
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        // else I decrease the quantity of existing item and also decrease total price
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

const updatCard = (product) => {};

export const productActions = productSlice.actions;
export default productSlice.reducer;
