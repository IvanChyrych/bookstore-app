import React from "react";

import { Header } from "../header";
import { Main } from "../main";
import { Footer } from "../footer";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className="d-flex">
            <Header/>
            <div className="w-75">
                <Main>
                    {children}
                </Main>
            </div>
            <Footer/>
        </div>
    )
}