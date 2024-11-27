import React from "react";
import {BungaAtas,BungaAtasImageDiv,DivButtonSimpanKalender,ButtonDiv,DivContainerTanggal,AcaraResepsi,Title, Tanggal, ValueTanggal} from './styled'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import BungaAtasIMG from './../../images/Asset-6.png'
import BurungGif from './../../images/giphy-1-1.gif'
const DivTanggalNikah= ()=>{
    return(
        <DivContainerTanggal>
                
            <BungaAtas  className="muncul-kanan">
                <BungaAtasImageDiv alt="bunga" src={BungaAtasIMG}>

                </BungaAtasImageDiv>
            </BungaAtas>
            <AcaraResepsi className="muncul-kiri">
                <div style={{position:'absolute', opacity:0.5,top:10}}>
                    <img alt="cip" style={{width:'500px'}} src={BurungGif}></img>
                </div>
                <Title>Akad Nikah</Title>
                <div style={{marginTop:'10px'}}></div>
                <Tanggal>Tanggal</Tanggal>
                <ValueTanggal>Sabtu, 11 Januari 2025</ValueTanggal>
                <div style={{marginTop:'0px'}}></div>
                <Tanggal>Waktu</Tanggal>
                <ValueTanggal>8.00 WIB - Selesai</ValueTanggal>
                <div style={{marginTop:'0px'}}></div>
                <Tanggal>Tempat</Tanggal>
                <ValueTanggal>Masjid Mujahiddin Pontianak</ValueTanggal>
                <div style={{marginTop:'0px'}}></div>

                <ButtonDiv> 
                    <DivButtonSimpanKalender>
                        <FaLocationDot style={{fontSize:'17px'}}></FaLocationDot>
                        Kunjungi Lokasi
                    </DivButtonSimpanKalender>
                    <div style={{marginTop:'30xp',position:'relative',height:'20px'}}></div>
                    <DivButtonSimpanKalender>
                        <FaRegCalendarAlt style={{fontSize:'17px'}}></FaRegCalendarAlt>
                        Simpan KE KALENDER
                    </DivButtonSimpanKalender>
                </ButtonDiv>
                <div style={{marginTop:'10xp',position:'relative',height:'8px'}}></div>

            </AcaraResepsi>
            <AcaraResepsi className="muncul-kiri">
                <div style={{position:'absolute', opacity:0.5,top:10}}>
                    <img alt="cip" style={{width:'500px'}} src={BurungGif}></img>
                </div>
                <Title>Acara Resepsi</Title>
                <div style={{marginTop:'10px'}}></div>
                <Tanggal>Tanggal</Tanggal>
                <ValueTanggal>Minggu, 12 Januari 2025</ValueTanggal>
                <div style={{marginTop:'0px'}}></div>
                <Tanggal>Waktu</Tanggal>
                <ValueTanggal>13.00 - 17.30 WIB</ValueTanggal>
                <div style={{marginTop:'0px'}}></div>
                <Tanggal>Tempat</Tanggal>
                <ValueTanggal>Aula Masjid Mujahiddin Pontianak</ValueTanggal>
                <div style={{marginTop:'0px'}}></div>

                <ButtonDiv> 
                    <DivButtonSimpanKalender>
                        <FaLocationDot style={{fontSize:'17px'}}></FaLocationDot>
                        Kunjungi Lokasi
                    </DivButtonSimpanKalender>
                    <div style={{marginTop:'30xp',position:'relative',height:'20px'}}></div>
                    <DivButtonSimpanKalender>
                        <FaRegCalendarAlt style={{fontSize:'17px'}}></FaRegCalendarAlt>
                        Simpan KE KALENDER
                    </DivButtonSimpanKalender>
                </ButtonDiv>
                <div style={{marginTop:'10xp',position:'relative',height:'8px'}}></div>

            </AcaraResepsi>
        </DivContainerTanggal>
    )
}
export default DivTanggalNikah