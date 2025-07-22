import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import {fetchBooks} from "../redux/book-slice";
import type { Book } from "../redux/book-slice";
import { Card } from "../components/card";
import { Title } from "../components/title";
import { useAppDispatch } from "../redux/store";
import type { RootState } from "../redux/store";
import { Spinner } from "../components/spinner";

export const NewBookReleases:React.FC = () => {
    const dispatch = useAppDispatch();
    const books=useSelector((state:RootState)=>state.books.list);
    const error=useSelector((state:RootState)=>state.books.error);
    const isLoading=useSelector((state:RootState)=>state.books.isLoading);

    useEffect(()=>{
        if (books.length===0) {
            dispatch(fetchBooks())
        }
    },[dispatch,books.length]);

    function renderBooks() {
     if (isLoading) {
        return <Spinner/>
     }   
     if (error) {
      return <div>{error}</div>  
     }

    return books.map((book:Book)=>(
    <Card 
        key={book.isbn13} 
        book={book}
    />));
    }

    return (
        <>
        <Title>New book releases</Title>
        <div className="d-flex flex-column">
            {renderBooks()}
        </div>
        </>
    )
}