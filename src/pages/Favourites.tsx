import React from "react";
import type { Book } from "../redux/books-slice";
import { Card } from "../components/card";
import { Title } from "../components/title";

export const Favourites:React.FC=()=>{
    const favourites=JSON.parse(localStorage.getItem('favoritesBooks')||'[]')

    function renderFavourites(){
        if (!favourites.length) {
            return 'nothihg to display'
        }
        return favourites.map((book:Book)=>(
            <Card
                key={book.isbn13}
                book={book}
            />
        ))
    }

    return(
        <>
        <Title>Favorites</Title>
        <div className="d-flex flex-column">
            {renderFavourites()}
        </div>
        </>
    )
}