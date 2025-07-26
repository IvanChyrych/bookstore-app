import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestBookDetails } from "../services/book";

export interface BookItem{
    quantity: number|1
    error: string
    title: string,
    subtitle: string
    language:string,
    authors: string
    publisher: string
    isbn10: string
    isbn13: string
    pages: string
    year: string
    rating: string
    desc: string
    price: string
    image: string
    url: string
    pdf: {[key: string]: string}
}

interface BookItemState {
    content: BookItem|null,
    isLoading: boolean,
    error: string|null
}

const initialState: BookItemState = {
    content: null,
    isLoading: false,
    error: null
}

export const fetchBook = createAsyncThunk<BookItem,string>(
'bookItem/fetchBook',
    async(isbn13:string,{rejectWithValue}) => {
    try{
        return await requestBookDetails(isbn13)
    }catch (error){
        return rejectWithValue(
            typeof error === 'string' ? error : 'An error occurred while fetching the book'
        );
    }}
)

export const bookItemSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBook.pending, (state) => {
            state.isLoading=true
        })
        .addCase(fetchBook.fulfilled, (state,action) => {
            state.isLoading=false,
            state.content=action.payload
        })
        .addCase(fetchBook.rejected, (state,action) => {
            state.isLoading=false,
            state.error=action.payload?action.payload.toString():'unknown error'
        })
    }
})

export const bookItemReducer=bookItemSlice.reducer