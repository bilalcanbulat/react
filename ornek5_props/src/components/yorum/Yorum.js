import React from 'react'
import yorumlar from "./Data.js"
import "./Yorum.css";


function Yorum(props) {
    console.log(props.indeks);
    const {ad, meslek, resim, yorum}= yorumlar[props.indeks]
    return (
        <div className="yorum-div">
        <h1>{ad}</h1>
        <h2>{meslek}</h2>
        <p>{yorum}</p>
        <img src={resim} alt=""/>
        </div>
    )
}

export default Yorum
