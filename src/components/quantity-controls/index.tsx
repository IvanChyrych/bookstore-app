import React, {useEffect} from "react";
import type { BookItem } from "../../redux/book-item-slice";
import {updateItems} from '../../redux/shopping-cart-slice'
import { useAppDispatch } from "../../redux/store";
import type { RootState } from "../../redux/store";
import { useSelector} from "react-redux";

interface QuantityControlProps{
    book:BookItem
}

export const QuantityControls:React.FC<QuantityControlProps>=({book})=>{
    const dispatch=useAppDispatch()
    const shoppingCart=useSelector((state:RootState)=>state.cart.items)
    
    useEffect(()=>{
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
    },[shoppingCart])

    function increaseQuantity(book:BookItem){
        dispatch(updateItems(shoppingCart.map((cartItem:BookItem)=>cartItem.isbn13===book.isbn13
        ?{...cartItem,quantity:cartItem.quantity+1}
        :cartItem )))
    }

    function decreaseQuantity(book:BookItem){
        dispatch(updateItems(shoppingCart.map((cartItem:BookItem)=>cartItem.isbn13===book.isbn13
        ?{...cartItem,quantity:Math.max(cartItem.quantity-1,1)}
        :cartItem 
    )))
    }

    return(
        <div className="d-flex align-items-center">
            <i className="bi bi-dash"  onClick={()=>decreaseQuantity(book)}></i>
            <i className="bi bi-plus" onClick={()=>increaseQuantity(book)}></i>
        </div>
    )

}
