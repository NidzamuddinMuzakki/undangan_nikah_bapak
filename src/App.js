import React, {   useState } from 'react';
import './App.css';
import Cover from './component/Cover'
import Foto from './component/Foto';
import backgroundImage from './images/paper-1.png'
import HitungMundurDiv from './component/HitungMundur';
import DivTanggalNikah from './component/NikahTanggal';
function App() {

  
const [stateClick,setStateClick] = useState(0)


  return (
    <div id="containerall"   style={{position:'relative',backgroundImage:`url(${backgroundImage})`,overflowX:'hidden',height:'100%', overflowY:`${stateClick===1?'auto':'hidden'}`}} >  
      {/* <audio id="audioplay"  autoPlay={true} >
 
      <source src={Audios} type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio> */}
      <Cover data={stateClick} setStateClick={setStateClick}/>
      {stateClick?<Foto data={stateClick} ></Foto>:""}
      {stateClick?<HitungMundurDiv></HitungMundurDiv>:""}
      {stateClick?<DivTanggalNikah ></DivTanggalNikah>:""}
    </div>
  );
}

export default App;
