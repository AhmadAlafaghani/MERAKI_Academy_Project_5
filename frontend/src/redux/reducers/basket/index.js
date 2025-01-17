import { createSlice } from "@reduxjs/toolkit";

const basket = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    amount: localStorage.getItem("amount") || 0,
    price: localStorage.getItem("price") || 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },

    deleteFromBasket: (state, action) => {
      state.basket = state.basket.filter((element, index) => {
        return element.id != action.payload;
      });
    },

    updateBasket: (state, action) => {
      state.basket = state.basket.map((element, index) => {
        if (element.id == action.payload.id) {
          return action.payload;
        }
        return element;
      });
    },

    setBasket: (state, action) => {
      state.basket = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = state.amount + 1;
      localStorage.setItem("amount", state.amount);
    },
    decrease: (state, action) => {
      state.amount = state.amount - 1;
      localStorage.setItem("amount", state.amount);
    },
    erase: (state, action) => {
      state.amount = state.amount - action.payload;
      localStorage.setItem("amount", state.amount);
    },
    erasePrice: (state, action) => {
      state.price = state.price - action.payload;
      localStorage.setItem("price", state.price);
    },
    zero: (state, action) => {
      state.amount = 0;
      localStorage.setItem("amount", state.amount);
    },
    setPrice: (state, action) => {
      state.price = action.payload + state.price;
      localStorage.setItem("price", state.price);
    },
    decreasePrice: (state, action) => {
      state.price = state.price - action.payload;
      localStorage.setItem("price", state.price);
    },
    zeroPrice: (state, action) => {
      state.price = 0;
      localStorage.setItem("price", state.price);
    },
  },
});

export const {
  setBasket,
  updateBasket,
  deleteFromBasket,
  addToBasket,
  setAmount,
  decrease,
  zero,
  zeroPrice,
  setPrice,
  decreasePrice,
  erase,
  erasePrice,
} = basket.actions;

export default basket.reducer;
