import React from "react";

interface CardProps {
    image: string,
    title: string,
    text: string,
    price: string,
    rating: string
}

export const Card: React.FC<CardProps> = ({ image,title,text,price,rating }) => {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <p className="card-rating">{rating}</p>
             <p className="card-price">{price}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    );
}

