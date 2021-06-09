import React, { useState, useEffect } from "react";
//! - useEffect Hook'u side effect(yan etki)'leri yonetmek icin kullanilan bir Hook'tur.
//!- Class komponentlerindeki componentDidMount(), componentDidUnMount(),
//!  componentDidUpdate() gibi yaşamdöngüsü (lifecycle) metodlarinin
//!  yaptigi isi yapar.
//! - Bu ozellikleri sayesinde genelde uygulama dis dunyadan (veritabani, api)
//!   veri cekerken kullanimi yaygindir.
function UseEffect01() {
  const [sayac, setSayac] = useState(0);

//? useEffect Hook'u default olarak her renderda işletir.
  useEffect(()=>{
console.log("ilk render ve sayfanın her render'da çalışır");
})

useEffect(()=>{
    console.log("Komponent her güncellendiğinde çalışır.");
    },[sayac])


useEffect(()=>{
        console.log("ilk render'da çalışır.");
        },[])

  function arttir() {
    setSayac(sayac + 1);
  }
  return (
    <div className="container text-center mt-5">
      <h1>SAYAC:{sayac}</h1>
      <button onClick={arttir} className="btn btn-danger">
        ARTTIR
      </button>
    </div>
  );
}
export default UseEffect01;