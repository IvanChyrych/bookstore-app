import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./books-slice";
import { useDispatch } from "react-redux";
import { bookItemReducer } from "./book-item-slice";
import { shoppingCartReducer } from "./shopping-cart-slice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
        bookItem: bookItemReducer,
        cart: shoppingCartReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch =  useDispatch.withTypes<AppDispatch>();