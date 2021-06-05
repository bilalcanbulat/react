import React from 'react'
import Mesaj from './Mesaj'

function Kisi(props) {
    return (
        <div>
        <Mesaj ad={props.ad}/>
        <h1> {props.ad}</h1>
        <img src={props.img}></img>
         <p>Telefon:{props.tel}</p>

        </div>
    )
}

export default Kisi

