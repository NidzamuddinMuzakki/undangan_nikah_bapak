import React, {   useState } from 'react';
import './App.css';
import Cover from './component/Cover'
import Foto from './component/Foto';
import backgroundImage from './images/paper-1.png'
import HitungMundurDiv from './component/HitungMundur';
import DivTanggalNikah from './component/NikahTanggal';
import DivOurGuft from './component/OurGift'
import Doa from './component/Doa'
import TerimaKasih from './component/TerimaKasih';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  
const [stateClick,setStateClick] = useState(0)
  const [loading, setLoading] = useState(false)

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
      {stateClick?<DivOurGuft loading={loading} setLoading={setLoading}></DivOurGuft>:""}
      {stateClick?<Doa ></Doa>:""}
      {stateClick?<TerimaKasih></TerimaKasih>:""}
      
        <ToastContainer position="bottom-right"
        autoClose={1000}></ToastContainer>
    </div>
  );
}

export default App;
