import React from "react";
import "./images/images.css";




const Hakkında = () => {

  return (
      <div className="images-container">
        <img src="./images/img.jpg" alt="" className="images-container" />
        <div className="metin-container">
          <h4>Hasta Takip Sistemi Nedir?</h4>
          <p>
            Uzaktan Hasta Takip Sistemi hastanın tedavi sonrası geleneksel klinik ortam dışında (Ev, vs) da doktoru tarafından takip edilip hastanın ulaşım maliyetlerinden ve kontrol için gereken süreden tasarruf etmesini sağlayan teknolojilerin genel adıdır.
          </p>
        </div>

      </div>
  );


};

export default Hakkında;