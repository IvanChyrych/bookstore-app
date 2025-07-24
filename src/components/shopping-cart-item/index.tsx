import React from "react";
import type { BookItem } from "../../redux/book-item-slice";

export const ShoppingCartItem:React.FC<{book:BookItem,onRemove:
(book:BookItem)=>void}>=({book,onRemove})=>{
    return(
        <div className="cart">
            <div className="card-item">
                <img src={book.image} alt="" className="card-item__image" />
                <div className="card-item__title">{book.title}</div>
                <div className="card-item__author">{book.authors}</div>
            </div>
            <div className="d-flex">
                <button onClick={()=>onIncreaseQuantity(book)}>+</button>
                <button onClick={()=>onRemove(book)}>-</button>
            </div>
        </div>
    )
}