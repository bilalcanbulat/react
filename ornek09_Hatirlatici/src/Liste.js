import React from "react";
function Liste(props) {
  const { kisiler } = props;
  return (
    <div>
      {kisiler.map((k) => {
        const { id, isim, resim, yas } = k;
        return (
          <div className="kisi" key={id}>
            <img src={resim} alt="" />
            <div>
            <h4>{isim}</h4>
            <p>{yas} Yaşında</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Liste;