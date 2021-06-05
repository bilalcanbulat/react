// ! props : Parent modulden child module veri aktarimini saglayan ozleliktir.
// * Veri akisi tek yonludur. Parenttan child'a dogru bir akis vardir.
import Kisi from "./Kisi";
import Mesaj from "./Mesaj";
function App() {
  return (
    <div className="App">
      {/* <Mesaj ad="Ahmet" />
      <Mesaj ad="Mehmet" />
      <Mesaj ad="Canan" /> */}

      <Kisi 
      ad="Ahmet Dikbayır"
      img="https://thispersondoesnotexist.com/image#"
      tel="111222333444" />

<Kisi 
      ad="Mehmet Akçayır"
      img="https://thispersondoesnotexist.com/image#"
      tel="34589987987944" />

<Kisi 
      ad="Veli Yeşildağ"
      img="https://thispersondoesnotexist.com/image#"
      tel="111222333444" />
      
    </div>
  );
}
export default App;