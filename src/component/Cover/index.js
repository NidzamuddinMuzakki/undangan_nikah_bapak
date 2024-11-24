import React from "react";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import {BungaBawahImageDiv,BungaAtasImageDiv,BungaAtas,BungaBawah, DivNamaPengantin,DivMohonMaaf,CoverDiv,DivTheWedding,DivTanggal,DivAppreciate,DivTamuUNdangan,ABukaUndangan } from "./styled";
import BungaAtasImage from './../../images/Asset-6.png'
import BungaBawahImage from './../../images/Asset-7.png'
import { HashLink } from "react-router-hash-link";
import BurungGif from './../../images/giphy-1-1.gif'
import Audios from './../../audio/audio.mp3'
import { useLocation } from "react-router-dom";
function useQuery(id) {
    const search  = useLocation();
    let mm =""
    let kkk = search.search.split("?"+id+"=")
    if(kkk.length>1){
        mm = kkk[1].split("#")[0]
        mm =mm.toUpperCase()
        if(mm){
            mm =decodeURIComponent((mm + '').replace(/\+/g, '%20'))
        }
    }
    return React.useMemo(() => mm,[mm]);
  }
const Cover = ({data,setStateClick})=>{
    const dataParam =  useQuery("name")

    return(
        <div style={{position:'relative',display:'flex', justifyContent:'center', alignItems:'center',width:'100vw',height:'100vh',marginBottom:data?'30px':'0px'}}>
            <CoverDiv>
                <div style={{position:'absolute', opacity:0.5,top:10}}>
                    <img alt="cip" style={{width:'500px'}} src={BurungGif}></img>
                </div>
                <BungaAtas>
                   
                    <BungaAtasImageDiv src={BungaAtasImage} alt="bungaatas"></BungaAtasImageDiv>
                </BungaAtas>
                <DivTheWedding>THE WEDDING</DivTheWedding>
                <DivTanggal>Minggu 12 Januari 2025</DivTanggal>
                <DivNamaPengantin>RIZQI & NIDZAM</DivNamaPengantin>
                <DivAppreciate>Appreciate For Your Coming</DivAppreciate>
                <DivTamuUNdangan>{dataParam?dataParam:"KELUARGA BESAR"}</DivTamuUNdangan>
                {data?"":<HashLink style={{textDecoration:'none',position:'relative',zIndex:2}} smooth to={"/#pengantin"} onClick={()=>{
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