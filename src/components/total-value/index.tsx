import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export const TotalValue:React.FC = ()=>{
    const total=useSelector((state:RootState)=>state.cart.total)

    return(
        <p>total:{total.toFixed(2)}</p>
    )
}