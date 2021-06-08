import React from 'react'
import { useState } from "react";
function Zamanlayici() {
    const [fark, setFark] = useState(0);
    const sn = setInterval(azalt,1000);

function tarihHesapla(){
    const d = new Date().getTime();
    const tarih= new Date(document.getElementById("tarih").value).getTime();
    const farkHesapla=(Math.floor(d/1000)-Math.floor(tarih/1000));
    setFark(farkHesapla);
    clearInterval(sn);

}
function azalt(){
    console.log(fark);
    setFark(fark-1);
    clearInterval(sn);

}

    return (
        <div>
        <input type="datetime-local" id="tarih" />
        <button onClick={tarihHesapla}>Hesapla</button>
            <h1>{fark}</h1>
        </div>
    )
}

export default Zamanlayici
