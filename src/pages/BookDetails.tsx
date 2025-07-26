import React,{ useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/spinner";
import  { useAppDispatch } from "../redux/store";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { fetchBook } from "../redux/book-item-slice";
import type { BookItem } from "../redux/book-item-slice";
import { Title } from "../components/title";
import { ShoppingCartButton} from "../components/shopping-cart-button";
import { updateItems } from "../redux/shopping-cart-slice";

export const BookDetails:React.FC=()=>{
    const {id}=useParams()
    const dispatch=useAppDispatch()

    const bookItem=useSelector((state:RootState)=>state.bookItem.content)
    const loading=useSelector((state:RootState)=>state.bookItem.isLoading)
    const error=useSelector((state:RootState)=>state.bookItem.error)

    useEffect(()=>{
        if (id) {
            
            dispatch(fetchBook(id))
        }
    },[id,dispatch])

    function AddToCart(book:BookItem){
        const shoppingCart:BookItem[]=JSON.parse(localStorage.getItem('shopping-cart')||'[]')
        const index=shoppingCart.findIndex(cartItem=>cartItem.isbn13===book.isbn13)
        if (index!==-1) {
            shoppingCart.splice(index,1)
        }
        else{
            shoppingCart.push({...book,quantity:1})
        }
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
        dispatch(updateItems(shoppingCart))
    }

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <div>error:{error}</div>
    }
    if (!bookItem) {
        return <div>no book found</div>
    }

    return(
        <div className="d-flex flex-column justify-content-center">
        <Title>{bookItem.title}</Title>
         <div className="card" style={{width: '18rem'}}>
        <img src={bookItem.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text">{bookItem.subtitle}</p>
             <p className="card-price">{bookItem.price}</p>
        </div>
        <ShoppingCartButton book={bookItem} onAddToCart={AddToCart}/>
        </div>
        </div>
    )
}