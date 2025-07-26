import React from "react";
import type { BookItem } from "../../redux/book-item-slice";
import { QuantityControls } from "../quantity-controls";
import { useAppDispatch } from "../../redux/store";
import type { RootState, } from "../../redux/store";
import {updateItems} from '../../redux/shopping-cart-slice'
import { useSelector } from "react-redux";


interface ShoppingCartItemProps{
    book: BookItem
}

export const ShoppingCartItem:React.FC<ShoppingCartItemProps> =({book})=>{
    const dispatch=useAppDispatch()
    const shoppingCart=useSelector((state:RootState)=>state.cart.items)

    function removeItem(book:BookItem) {
        const filteredCart=shoppingCart.filter((cartItem:BookItem)=>cartItem.isbn13!==book.isbn13)
        localStorage.setItem('shopping-cart',JSON.stringify(filteredCart))
        dispatch(updateItems(filteredCart))
    }

    return(
        <div className="card mb-3">
            <img src={book.image} alt="" />
            <h5>{book.title}</h5>
            <p>{book.authors}</p>
            <QuantityControls book={book}/>
            <p>{book.price}</p>
            <i className="bi bi-x-lg" onClick={()=>removeItem(book)}></i>
        </div>
    )
}