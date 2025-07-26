import React from "react";
import type { Book } from "../redux/books-slice";
import { Card } from "../components/card";
import { Title } from "../components/title";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const Favourites:React.FC=()=>{
    const favouriteBooks=useSelector((state:RootState)=> state.books.favourites)

const renderFavourites=()=>{
    if (!favouriteBooks.length) {
        return 'nothing to display'
    }
    return favouriteBooks.map((book:Book)=>(
        <Card key={book.isbn13} book={book}/>
    ))
}

    return(
        <div className="d-flex flex-column">
        <Title>Favorites ({favouriteBooks.length})</Title>
        <div className="d-flex flex-column">
            {renderFavourites()}
        </div>
        </div>
    )
}