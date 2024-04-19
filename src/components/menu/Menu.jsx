import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-icons">
        <ul>
          {/* <li className={activeItem === 0 ? "active" : ""}></li> */}
          <li>
            <span className="material-symbols-outlined">home</span>
          </li>
          {/* <li className={activeItem === 1 ? "active" : ""}> */}
          <li>
            <span className="material-symbols-outlined">barcode_scanner</span>
          </li>
          {/* <li className={activeItem === 2 ? "active" : ""}> */}
          <li>
            <span className="material-symbols-outlined">book_4</span>
          </li>
          {/* <li className={activeItem === 3 ? "active" : ""}> */}
          <li>
            <span className="material-symbols-outlined">account_circle</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
