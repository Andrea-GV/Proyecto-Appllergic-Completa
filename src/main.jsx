import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home/Home.jsx";

import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Splash from "./pages/splash/Splash.jsx";
import Scanner from "./pages/scanner/Scanner.jsx";
import Valoracion from "./components/valoracion/Valoracion.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>



    <App />
  </React.StrictMode>

);
