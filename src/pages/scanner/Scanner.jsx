import { useRef, useEffect } from "react";
// import { QRScanner } from "./QRScanner/QRScanner";
import { Scanner as QrScanner } from "@yudiel/react-qr-scanner";
import "./Scanner.css";
import { BarcodeScanner } from "./BarcodeScanner";
// import { QRScanner } from "./QRScanner/QRScanner";
import Menu from "../../components/menu/menu/Menu";
import { useNavigate } from "react-router-dom";

export default function Scanner() {
  const navigate = useNavigate();
  const detailsProductPage = (data) => {
    // console.log("dentro", data);
    navigate("/scanner/result");
    localStorage.setItem("idProduct", data);
    window.location.reload();
  };

  useEffect(() => {}, []);
  //   const previewStyle = {
  //     height: 240,
  //     width: 320,
  //   };

  //   const scannerRef = useRef(null);

  //   useEffect(() => {
  //     const scanner = scannerRef.current.getScanner();

  //     scanner.addListener("scan", (data) => {
  //       console.log("Scan result:", data);
  //     });
  //     return () => {
  //       scanner.destroy();
  //     };
  //   }, []);
  return (
    <div className="scaner">
      <div className="cross-component"></div>
      <div className="scaner-info">
        <div className="scaner-info-title">
          <h1>Escaneando...</h1>
        </div>
        <div className="scaner-info-text">
          <p>
            Tan solo tienes que centrar el <strong>código de barras</strong> del
            producto en el recuadro.
          </p>
        </div>
        <div className="scaner">
          <BarcodeScanner />
          {/* <QRScanner /> */}
          <QrScanner
            onResult={(result) => detailsProductPage(result)}
            onError={(error) => console.log(error?.message)}
          />
        </div>
        <div className="scanner-types">
          <div className="scaner1">
            <span className="material-symbols-outlined">barcode_scanner</span>
            <h5>Código de barras</h5>
          </div>
          <div className="scanerqr">
            <span className="material-symbols-outlined">qr_code_scanner</span>
            <h5>Código QR</h5>
          </div>
          <div className="scanerNPC">
            <span className="material-symbols-outlined">document_scanner</span>
            <h5>NPC</h5>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}
