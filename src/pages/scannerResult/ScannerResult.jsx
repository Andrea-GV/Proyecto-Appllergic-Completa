import axios from "axios";
import React, { useEffect, useState } from "react";
import "./scannerResult.css";
import { useParams } from "react-router-dom";

export default function ScannerResult() {
  const [products, setProducts] = useState([]);
  // const { id } = useParams();
  const [qrCodeValue, setQrCodeValue] = useState(
    localStorage.getItem("idProduct") || ""
  );
  const [isLoading, setIsLoading] = useState(true);

  const getValueFromLocalStorage = () => {
    const storedValue = localStorage.getItem("idProduct");
    if (storedValue) {
      console.log(storedValue);

      setQrCodeValue(storedValue);
    }
  };
  const URL = async () => {
    await axios.get(qrCodeValue).then((res) => setProducts(res.data));
  };

  useEffect(() => {
    // axios.get(qrCodeValue).then((res) => setProducts(res.data));
    URL();
    getValueFromLocalStorage();
  }, []);

  useEffect(() => {
    if (products && products.data) {
      setIsLoading(false);
    }
  }, [products]);
  console.log(products);

  //   return (
  //     <>
  //       <div className="product-info">
  //         <h2>Aqui tienes el resultado</h2>
  //         <h3> Este producto es apto para ti</h3>
  //         <p>Valor leído del QR: {qrCodeValue}</p>
  //       </div>
  //       <div className="">
  //         <div className="coverImage">
  //           <img src={products.data?.coverImage} alt=""></img>
  //         </div>
  //         <h1>{products.data?.name}</h1>
  //         <ul className="ingredientes">
  //           {products.data?.ingredients.map((ingredient, index) => (
  //             <li key={index}>{ingredient}</li>
  //           ))}
  //         </ul>
  //       </div>
  //       {/* <div className="products">
  //         <h3>{products.data.name}</h3>
  //         {products.data.ingredients.map((item, index) => (
  //           <div className="product" key={index}>
  //             <div className="ingredients">
  //               <ul>
  //                 <li key={index}>{item}</li>
  //               </ul>
  //             </div>
  //             <div className="product-cover">
  //               <img src={products.data.coverImage} alt="img" />
  //             </div>
  //           </div>
  //         ))}
  //       </div> */}
  //     </>
  //   );
  // }
  return (
    <>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <>
          <div className="product-info">
            <h2>Aqui tienes el resultado</h2>
            <h3> Este producto es apto para ti</h3>
            <p>Valor leído del QR: {qrCodeValue}</p>
          </div>
          <div className="">
            <div className="coverImage">
              <img src={products.data?.coverImage} alt=""></img>
            </div>
            <h1>{products.data?.name}</h1>
            <ul className="ingredientes">
              {products.data?.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}