import React from "react";

interface CardProps {
    image: string,
    title: string,
    subtitle: string,
    price: string,
}

export const Card: React.FC<CardProps> = ({ image,title,price,subtitle }) => {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{subtitle}</p>
             <p className="card-price">{price}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    );
}

