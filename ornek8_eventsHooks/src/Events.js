import React from 'react'
// * EVENTS (Olaylar) Javascriptteki benzer olarak camelCase ile kullanilirlar.
// ! Event fonksiyonu yazilirken dikkat edilmelidir. Fonksiyon referans olarak
// ! gonderilmelidir. Ornegin:  onClick={handleTikla}
// * Eger onClick={handleTikla()} seklinde yazilirsa sayfa her render edildiginde dogrudan calismis olur.
// ? Peki parametreli bir fonksiyon ise ne yapmak gerekir.
// ? Parametreli fonksiyonlar bir baska isimsiz fonksiyon ile cagrilmalidir.
function Events() {
    let baslik ="OLAYLAR"
function handleTikla(){
    console.log("Tıkla butonuna tıklandı")
}
function handleYaz(X){
    console.log(`${X} Tıkla butonuna tıkladı`)
}

  // ? SORU: Degistir Butonuna tiklandiginda baslik yazisini EVENTS olarak degisitirmesini istiyoruz.
  // ! Degisikligi log'da gorsek de web sayfasında render edilmiyor.
  // * Bunun sebebi REACT icin bu nesnenin hareketli bir nesne olup olmadigini bilmemesidir.
  // * React minimum DOM islemi icin default olarak nesneleri guncellemiyor.
  // ? Guncellenecekleri (interaktif) olanlari biz ona bildirmeliyiz. Bunun için iki yöntem var.
  // TODO: 1.Yontem Statefull Nesneler kullanmak. Yani state'ler ile degisimi gostermek. (KARMAŞIK)
  // ! 2. Yontem Hooks adi verilen fonksiyonel yaklasimi kullanmak.
function handleDegistir(){
    baslik="EVENTS";
    console.log(baslik);
}

    return (
        <div>
        <h1>{baslik}</h1>
        <button onClick={handleTikla}>TIKLA</button>
        <button onClick={()=> console.log("Sil butonuna tıklandı...")}>SİL</button> 
        <button onClick={()=> handleYaz("AHMET")}>YAZ</button>    
        <button onClick={handleDegistir}>Değiştir</button>   
        </div>
    )
}

export default Events
