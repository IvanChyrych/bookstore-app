import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./book-slice";
import { useDispatch } from "react-redux";
import { bookItemReducer } from "./book-item-slice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
        bookItem: bookItemReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch =  useDispatch.withTypes<AppDispatch>();