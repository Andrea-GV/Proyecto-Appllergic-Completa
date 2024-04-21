import "./BarcodeScanner.css";
import Quagga from "quagga";
import React, { useState, useEffect } from "react";

export function BarcodeScanner() {
  const [lastScannedBarcode, setLastScannedBarcode] = useState(null);

  useEffect(() => {
    const initBarcode = () => {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector(".c-barcode-scanner"),
          },
          decoder: {
            readers: [
              "code_128_reader",
              "ean_reader",
              "ean_8_reader",
              "code_39_reader",
              "code_39_vin_reader",
              "codabar_reader",
              "upc_reader",
              "upc_e_reader",
              "i2of5_reader",
              "2of5_reader",
              "code_93_reader",
            ],
          },
        },
        function (err) {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
        }
      );

      Quagga.onDetected((code) => {
        // Verificar si este código de barras ya ha sido escaneado
        if (code.code !== lastScannedBarcode) {
          setLastScannedBarcode(code.code);
          console.log(code);
          // Lógica adicional aquí, como enviar el código de barras a la página del producto
        }
      });
    };

    initBarcode();

    return () => {
      Quagga.stop();
    };
  }, [lastScannedBarcode]);

  return <div className="c-barcode-scanner"></div>;
}
// export function BarcodeScanner() {
//   const initBarcode = () => {
//     Quagga.init(
//       {
//         inputStream: {
//           name: "Live",
//           type: "LiveStream",
//           target: document.querySelector(".c-barcode-scanner"), // Or '#yourElement' (optional)
//         },
//         decoder: {
//           //Si no te funciona prueba a quitar los decoders
//           readers: [
//             "code_128_reader",
//             "ean_reader",
//             "ean_8_reader",
//             "code_39_reader",
//             "code_39_vin_reader",
//             "codabar_reader",
//             "upc_reader",
//             "upc_e_reader",
//             "i2of5_reader",
//             "2of5_reader",
//             "code_93_reader",
//           ],
//         },
//       },
//       function (err) {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log("Initialization finished. Ready to start");
//         Quagga.start();
//       }
//     );
//     Quagga.onDetected((code) => console.log(code));
//   };
//   useEffect(initBarcode, []);
//   return <div className="c-barcode-scanner"></div>;
// }
