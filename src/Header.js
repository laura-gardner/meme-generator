import React from "react";
import trollFace from "./TrollFace.png";

const Header = () => {
    return (
        <header className="header">
            <img className="header--icon" src={trollFace} alt=""/>
            <h1 className="header--title">Meme Generator</h1>          
            <h2 className="header--subtitle">React Course - Project 3</h2>
        </header>
    )
}

export default Header;