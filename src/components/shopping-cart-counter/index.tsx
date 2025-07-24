import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type{ RootState } from "../../redux/store";

export const ShoppingCartCounter:React.FC=()=>{
    const itemCount=useSelector((state:RootState)=>state.cart.counter)

    return(
        <NavLink to='/cart'>
            <span>cart:</span><span>{itemCount||null}</span>
        </NavLink>
    )
}