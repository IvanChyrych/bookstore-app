import React, {useState,useEffect} from "react";
import type { Book } from "../../redux/book-slice";

export const Card: React.FC<{book:Book}> =({book}) => {
    const[isFavourite,setIsFavourite]=useState(false)

    useEffect(()=>{
        const favoritesBooks: Book[] = JSON.parse(localStorage.getItem("favoritesBooks") || "[]");
        const isBookFavourite = favoritesBooks.some((favBook:Book)=>favBook.isbn13===book.isbn13)
        setIsFavourite(isBookFavourite)
    },[book.isbn13])

    function  toggleFavicon(book:Book) {
        const favoritesBooks: Book[] = JSON.parse(localStorage.getItem("favoritesBooks") || "[]");
        
        const index = favoritesBooks.findIndex(favBook=>favBook.isbn13===book.isbn13)

        if (index!==-1) {
            favoritesBooks.splice(index, 1);
        }
        else{
            favoritesBooks.push(book)
        }
        localStorage.setItem("favoritesBooks", JSON.stringify(favoritesBooks));
        setIsFavourite(!isFavourite)
    }

    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={book.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.subtitle}</p>
             <p className="card-price">{book.price}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            <i className={isFavourite?'bi bi-heart-fill':"bi bi-heart"} style={{cursor:"pointer"}} 
            onClick={()=>toggleFavicon(book)}></i>
        </div>
        </div>
    );
}

