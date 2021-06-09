import React, { useState } from "react";
import data from "./data";
import Liste from './Liste';


function App() {
const [kisiler, setKisiler]=useState(data);

function temizle(){
  setKisiler([]);
}
 
  return (
    <main>
      <section className="container">
      <h4>Bugün {kisiler.length} doğum günü bulunmaktadır.</h4>
       <Liste kisiler ={kisiler}/>
       <button onClick={temizle}>Temizle</button>
      </section>
    </main>
  );
}

export default App;
