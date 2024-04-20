import React from "react";
import Menu from "../../../components/menu/Menu";
import "./Diary.css";

export default function Diary() {
  return (
    <div className="diary">
      <div className="cross-component"></div>
      <div className="diary-title">
        <h1>¿Incluimos la seleción en tu Diario?</h1>
      </div>
      <div className="diary-text">
        <p>Añade tus comentarios para completar tu información.</p>
      </div>
      <div className="diary-content"></div>
      <div className="button">
        <button className="diary-button-save">Guardar</button>
      </div>
    </div>
  );
}
