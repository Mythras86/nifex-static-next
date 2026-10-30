'use client';

import { useState } from "react";
import NavBar from "./NavBar";

export default function BurgerMenu() {

    const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

   
    return(
        <>
        <div className="burger selectable" onClick={()=>setBurgerOpen(true)}>&#9776;</div>
        
        {burgerOpen &&
            <div className="burgerNavCont" onClick={()=>setBurgerOpen(false)}>
                <NavBar></NavBar>
                <div className="selectabe bezaras">X</div>
            </div>
        }
        </>
    );
}