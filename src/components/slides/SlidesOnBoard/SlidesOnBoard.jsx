import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./slideOnBoard.css";
import "swiper/css";
import "swiper/css/pagination";


export default function SlidesOnBoard() {
  return (
    <div className="slideOnBoardContainer">
       <div className="logo">
              <img className='imagen' src="public\IMG\logo_page-0001.jpg"/>
            </div>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container1">
           
            <div className="barras">
              <img src="public\IMG\scan2.jpg"></img>
            </div>
            <div className="text1">
              <p>
                ¡Bienvenido a <strong>Applergic</strong>!
              </p>
              <p>
                Escanea el código de barras<br></br> de tu producto y Applergic te<br></br> dirá
                si es apto para ti.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container2">
            <div className="escribiendo">
              <img src="public\IMG\rectangle.png"/>
            </div>
            <div className="text2">
              <p>
                Lleva tu diario de<br></br> compras y actividades.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container3">
            <div className="albulancia">
              <img src="public\IMG\ambulancia.jpg"/>
            </div>
            <div className="text3">
              <p>
                En caso de emergencia nos <br></br>pondremos en contacto con la <br></br>persona que nos digas.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container4">
            <div className="traduccion">
              <img src="public\IMG\traduccioN.jpg"/>
            </div>
            <div className="text4">
              <p>
                Viaja a donde quieras.Tendrás a tu <br></br> disposición un traductor off-line y tu <br></br> informe de alergias e intolerancias<br></br>traducido al idioma local.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
