
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";


const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  
  },
  preloadedState: persistedState, // set the preloaded state from localStorage
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
}); // set up a subscription to save the state to localStorage whenever it changes

export default store;
