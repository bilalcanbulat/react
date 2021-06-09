import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import Bell from './bell.png';

const App = () => {
const[timerDays, setTimerDays] = useState('00');
const[timerHours, setTimerHours] = useState('00');
const[timerMinutes, setTimerMinutes] = useState('00');
const[timerSeconds, setTimerSeconds] = useState('00');
const[countdownDate, setCountdownDate] =useState (0);


function tarihGiris(){
  const tarih= new Date(document.getElementById("tarih").value).getTime();
  setCountdownDate(tarih);
}



let interval =useRef();

const startTimer=()=>{
interval =setInterval(()=>{
const now = new Date().getTime();
console.log(now);
const distance =countdownDate-now;
const days=Math.floor(distance /(1000*60*60*24));
const hours=Math.floor(distance %(1000*60*60*24)/(1000*60*60));
const minutes=Math.floor(distance % (1000*60*60)/(1000*60) );
const seconds=Math.floor(distance %(1000*60)/1000);

if (distance<0) {
  clearInterval(interval.current);
}else{
  setTimerDays(days);
  setTimerHours(hours);
  setTimerMinutes(minutes);
  setTimerSeconds(seconds);
}

},1000)};


useEffect(() => {
  startTimer();
  return () => {
    clearInterval(interval.current);
  }
});
  return (
    <section className="timer-container">
      <section className="timer">
      <div className="timer-1">
        <span className="timer-icon"><img src={Bell} width="100px"/> </span>
        <h2>Zamanlayıcı</h2>
        <p>Gerçek zamanlı zamanlayıcı. Ne kadar zaman kaldığını görün...</p>
      </div>
      <div className="anaTimer">
      <section>
        <p>{timerDays}</p>
        <p><small>Days</small></p>
      </section>
      <p><br/>:</p>
      <section>
        <p>{timerHours}</p>
        <p><small>Hours</small></p>
      </section>
      <p><br/>:</p>
      <section>
        <p>{timerMinutes}</p>
        <p><small>Minutes</small></p>
      </section>
      <p><br/>:</p>
      <section>
        <p>{timerSeconds}</p>
        <p><small>Second</small></p>
      </section>
      </div>
      <div className="tarihGiris">
        <input className="form-control" type="datetime-local" id="tarih" />
        <button className="btn btn-danger" onClick={tarihGiris} >Ne Kadar Kaldı ?</button>
        </div>
      </section>
      
    </section>
  );
}

export default App;
