import React from "react";

import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-icons">
        <ul>
          <Link to="/">
            <li>
              <span className="material-symbols-outlined">home</span>
            </li>
          </Link>
          <Link to="/scanner">
            <li>
              <span className="material-symbols-outlined">barcode_scanner</span>
            </li>
          </Link>

          <Link to="/diary">
            <li>
              <span className="material-symbols-outlined">book_4</span>
            </li>
          </Link>
          <Link to="/profile">
            <li>
              <span className="material-symbols-outlined">account_circle</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
