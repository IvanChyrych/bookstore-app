import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

interface Book{
    id:string,
    title:string,
    author:string,
    image:string,
    price:number
}

interface BookState{
    list: Book[],
    isLoading:boolean,
    error: string|null
}

const initialState: BookState={
    list:[],
    isLoading:false,
    error:null
}

export const fetchBooks=createAsyncThunk<Book[],void>('books/fetchBooks',async(_, {rejectWithValue})=>{try{
    const response=await fetch('https://api.itbook.store/1.0/new');
    if(!response.ok){
        throw new Error('Server Error!');
    }
        const data=await response.json();
        return data.books;
    }catch(error){
        return rejectWithValue(
            typeof error==='string'?error: 'Unknown Error'
        );
    }
});

const bookSlice=createSlice({
    name:'books',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchBooks.pending,(state)=>{
                state.isLoading=true;
                state.error=null;
            })
            .addCase(fetchBooks.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.list=action.payload.map((book)=>({...book}));
            })
            .addCase(fetchBooks.rejected,(state,action)=>{
                state.isLoading=false;
                state.error=action.payload as string;
            })
        }
    })

export const booksReducer=bookSlice.reducer;