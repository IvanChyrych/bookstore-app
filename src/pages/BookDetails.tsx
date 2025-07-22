import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/spinner";
import  { useAppDispatch } from "../redux/store";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { fetchBook } from "../redux/book-item-slice";
import { Title } from "../components/title";

export function BookDetails(){
    const {isbn13}=useParams()
    const dispatch=useAppDispatch()

    const bookItem=useSelector((state:RootState)=>state.bookItem.content)
    const loading=useSelector((state:RootState)=>state.bookItem.isLoading)
    const error=useSelector((state:RootState)=>state.bookItem.error)

    useEffect(()=>{
        if (isbn13) {
            
            dispatch(fetchBook(isbn13))
        }
    },[isbn13,dispatch])

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
        <>
        <Title>{bookItem.title}</Title>
         <div className="card" style={{width: '18rem'}}>
        <img src={bookItem.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text">{bookItem.subtitle}</p>
             <p className="card-price">{bookItem.price}</p>
        </div>
        </div>
        </>
    )
}