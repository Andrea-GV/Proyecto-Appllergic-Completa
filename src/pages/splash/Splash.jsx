import React from "react";
import "./Splash.css";

export default function Splash() {
  return (
    <div>
      <div className="Portada">
        <div className="Portada-arriba">
          <h1>Applergic</h1>
          <span>Mi guía alimentaria</span>
        </div>
        <div className="Portada-abajo">
          <img
            className="Portada-img"
            src="public/IMG/logoApplergicFigurasGiro.png"
            alt="app-photo"
          />
        </div>
      </div>
    </div>
  );
}
