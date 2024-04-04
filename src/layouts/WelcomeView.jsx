import React, { useState } from "react";
import "./stylesWelcomeView.css";


const WelcomeView = () => {
    const [gameStarted, setGameStarted] = useState(false);

    const onHandleButtonStart = () => {
        console.log("Iniciar Juego");
        setGameStarted(true);
    }

    return (
        <div className={`container ${gameStarted ? 'hidden' : ''}`}>
            <div className="logo-univalle">
                <img src="/assets/images/logo-univalle.png" alt="Logo Universidad del Valle" />
            </div>
            <div className="title-squid-games">
                Bienvenido a<br/>Squid Games
            </div>
            <div onClick={onHandleButtonStart} className="button-start">
                <button>Iniciar</button>
            </div>
        </div>
    );
}

export default WelcomeView;
