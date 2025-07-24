import React,{useEffect,useState} from "react";
import type { BookItem } from "../../redux/book-item-slice";

interface CartButtonProps{
    book:BookItem,
    onAddToCart:(book:BookItem)=>void
}

export const ShoppingCartButton:React.FC<CartButtonProps>=({book, onAddToCart})=>{
    const [isInCart,setIsInCart]=useState<boolean>(false)

    useEffect(()=>{
        const shoppingCart=JSON.parse(localStorage.getItem('shopping-cart')||'[]')
        const found=shoppingCart.find((item:BookItem)=>item.isbn13===book.isbn13)
        setIsInCart(found)
    },[book])

    const addToCart=()=>{
        onAddToCart(book)
        setIsInCart(!isInCart)
    }

    return (
        <button className="btn btn-dark" onClick={addToCart}>
                {isInCart?'remove from cart':'add to cart'}
        </button>
    )
}