import React from "react";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import {BungaBawahImageDiv,BungaAtasImageDiv,BungaAtas,BungaBawah, DivNamaPengantin,DivMohonMaaf,CoverDiv,DivTheWedding,DivTanggal,DivAppreciate,DivTamuUNdangan,ABukaUndangan } from "./styled";
import BungaAtasImage from './../../images/Asset-6.png'
import BungaBawahImage from './../../images/Asset-7.png'
import { HashLink } from "react-router-hash-link";

import Audios from './../../audio/audio.mp3'

const Cover = ({data,setStateClick})=>{
    
    return(
        <div style={{position:'relative',display:'flex', justifyContent:'center', alignItems:'center',width:'100vw',height:'100vh',marginBottom:data?'30px':'0px'}}>
            <CoverDiv>
                <BungaAtas>
                   
                    <BungaAtasImageDiv src={BungaAtasImage} alt="bungaatas"></BungaAtasImageDiv>
                </BungaAtas>
                <DivTheWedding>THE WEDDING</DivTheWedding>
                <DivTanggal>Minggu 12 Januari 2025</DivTanggal>
                <DivNamaPengantin>RIZQI & NIDZAM</DivNamaPengantin>
                <DivAppreciate>Appreciate For Your Coming</DivAppreciate>
                <DivTamuUNdangan>KELUARGA BESAR</DivTamuUNdangan>
                {data?"":<HashLink style={{textDecoration:'none'}} smooth to={"/#pengantin"} onClick={()=>{
                    setStateClick(1)
                    const audio = new Audio(Audios)
    audio.load()
    const audioPromise = audio.play()
    if (audioPromise !== undefined) {
      audioPromise
      .then(_ => {
        // autoplay started
      })
      .catch(err => {
        // catch dom exception
        console.info(err)
      })
    }
                    }}>
                    <ABukaUndangan >
                        
                        <FaRegEnvelopeOpen style={{marginRight:'15px',fontSize:'20px'}}></FaRegEnvelopeOpen>
                        <span>BUKA UNDANGAN</span>
                    </ABukaUndangan>
                </HashLink>}
                <DivMohonMaaf>*) Mohon maaf apabila ada kesalahan penulisan nama/gelar</DivMohonMaaf>

                <BungaBawah>
                   
                   <BungaBawahImageDiv src={BungaBawahImage} alt="bungaatas"></BungaBawahImageDiv>
               </BungaBawah>

            </CoverDiv>
        </div>
    )
}

export default Cover