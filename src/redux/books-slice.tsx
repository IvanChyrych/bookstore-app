import { createSlice,createAsyncThunk, } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { requestBooks, requestSearchResults } from "../services/book";

export interface Book{
    id:string,
    title:string,
    subtitle:string,
    image:string,
    isbn13:string,
    price:string,
    url:string
}

export interface SearchParams{
    search:string|undefined,
    page:string|undefined
}

export interface SearchResults{
    total:string,
    books:Book[]
}

interface BookState{
    list: Book[],
    isLoading:boolean,
    error: string|null,
    pagesCount:number,
    favourites:Book[]
}

const initialState: BookState={
    list:[] as Book[],
    isLoading:false,
    error:null,
    pagesCount:0,
    favourites: JSON.parse(localStorage.getItem('favoritesBooks')||'[]')
}

export const fetchBooks=createAsyncThunk<Book[],void>('books/fetchBooks',
    async(_, {rejectWithValue})=>{
        try{
        return await requestBooks();
    }catch(error){
        return rejectWithValue(
            typeof error==='string'?error: 'Unknown Error'
        );
    }
});

export const fetchSearchResults=createAsyncThunk<SearchResults,
SearchParams>(
'books/fetchSearchResults',
async({search,page},{rejectWithValue})=>{
    try{
        return await requestSearchResults({search, page});
    }catch(error){
        return rejectWithValue(
            typeof error==='string'?error: 'Unknown Error'
        );
    }
})


    const bookSlice=createSlice({
    name:'books',
    initialState,
    reducers:{
        setFavourites(state,action:PayloadAction<Book[]>){
            state.favourites=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchBooks.pending,(state)=>{
                state.isLoading=true;
                state.error=null;
            })
            .addCase(fetchBooks.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.list=action.payload;
            })
            .addCase(fetchBooks.rejected,(state,action)=>{
                state.isLoading=false;
                state.error=action.payload as string;
            })
            .addCase(fetchSearchResults.pending,(state)=>{
                state.isLoading=true;
                state.error=null;
            })
            .addCase(fetchSearchResults.fulfilled,(state,action)=>{
                const totalNumber=Number(action.payload.total);
                state.isLoading=false;
                state.list=action.payload.books
                state.pagesCount=Math.ceil(totalNumber>1000?100:totalNumber/10);
            })
            .addCase(fetchSearchResults.rejected,(state,action)=>{
                state.isLoading=false;
                state.error=action.payload as string;
            })
        }
    })

export const {setFavourites}=bookSlice.actions 
export const booksReducer=bookSlice.reducer;