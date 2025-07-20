import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./book-slice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
    },
});

