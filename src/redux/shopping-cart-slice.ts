import { createSlice } from "@reduxjs/toolkit";
import type { BookItem } from "./book-item-slice";

interface ShoppingCartState{
    counter?:number,
    items?:[],
    total:number
}

function calculateTolal(items:BookItem[]){
    const total=items
    .map((book)=>({
        ...book,
        price:book.price.substring(1)
    }))
    .reduce((accumulator,book)=>accumulator+Number(book.price)*Number(book.quantity),0)
    return total.toFixed(2)
}

const initialState: ShoppingCartState = {
    items: JSON.parse(localStorage.getItem('shopping-cart')||'[]'),
    counter: JSON.parse(localStorage.getItem('shopping-cart')||'[]').length,
    total:Number(calculateTolal(JSON.parse(localStorage.getItem('shopping-cart')||'[]')))
}

const shoppingCartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        updateItems(state,action) {
            state.items=action.payload
            state.total=Number(calculateTolal(action.payload))
            state.counter=action.payload.length
        },
    }
})

export const {updateItems}=shoppingCartSlice.actions

export const shoppingCartReducer=shoppingCartSlice.reducer