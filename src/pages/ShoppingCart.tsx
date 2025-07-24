import React,{useEffect,useState} from "react";
import { Title } from "../components/title";
import { ShoppingCartItem } from "../components/shopping-cart-item";
import type { BookItem } from "../redux/book-item-slice";
import { useAppDispatch } from "../redux/store";
import { setCount } from "../redux/shopping-cart-slice";

export const ShoppingCart:React.FC=()=>{
    const dispatch=useAppDispatch()
    const [ShoppingCart,setShoppingCart]=useState<BookItem[]>(()=>{
        return JSON.parse(localStorage.getItem('shopping-cart')||'[]')
    })

    useEffect(()=>{
    localStorage.setItem('shopping-cart',JSON.stringify(ShoppingCart))

    
        dispatch(setCount(ShoppingCart.length))},[ShoppingCart,dispatch])


    function removeItem(book:BookItem){
        const updatedCart= ShoppingCart.filter((cartItem)=>cartItem.isbn13!==book.isbn13)
        setShoppingCart(updatedCart)}

    function renderShoppingCart(){
        if(!ShoppingCart.length) return 'nothihg to display'
        return ShoppingCart.map((book:BookItem)=>(
        <ShoppingCartItem 
        key={book.isbn13} 
        book={book} 
        onRemove={removeItem}/>))
    }

    function calculateTotal(items:BookItem[]){
        const total=items.map((book)=>({
            ...book,
            price:book.price.substring(1)
        }))
        .reduce((accumulator,book)=>accumulator+Number(book.price)*Number(book.quantity),0)
        return total.toFixed(2)
    }

    return(
        <>
            <Title>Shopping cart</Title>
            {renderShoppingCart()}
            <div>total: {calculateTotal(ShoppingCart)}</div>
            <button className="mb-3">check out</button>
        </>
    )

}