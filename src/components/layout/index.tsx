import React from "react";

import { Header } from "../header";
import { Main } from "../main";
import { Footer } from "../footer";
import { Outlet } from "react-router-dom";


export const Layout: React.FC = () => {
    return(
        <div className="d-flex flex-column" style={{minHeight:'100vh'}}>
            <Header/>
            <div className="w-75">
                <Main>
                    <Outlet/>
                </Main>
            </div>
            <Footer/>
        </div>
    )
}