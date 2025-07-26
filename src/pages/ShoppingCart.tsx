import React from "react";
import { Title } from "../components/title";
import { ShoppingCartItem } from "../components/shopping-cart-item";
import type { BookItem } from "../redux/book-item-slice";
import type { RootState } from "../redux/store";
import {TotalValue} from '../components/total-value'
import { useSelector } from "react-redux";

export const ShoppingCart:React.FC=()=>{

    const ShoppingCart=useSelector((state:RootState)=>state.cart.items)

    function renderShoppingCart(){
        if(!ShoppingCart?.length) return 'nothihg to display'
        return ShoppingCart?.map((book:BookItem)=>(
        <ShoppingCartItem 
        key={book.isbn13} 
        book={book} 
        />))
    }

    return(
        <div className="d-flex flex-column">
            <Title>Shopping cart</Title>
            {renderShoppingCart()}

            <div>
                {ShoppingCart?.length?<TotalValue/>:null}
                {ShoppingCart?.length?(
                 <button className="mb-3">check out</button>
                ):null}
            </div>
        </div>
    )

}