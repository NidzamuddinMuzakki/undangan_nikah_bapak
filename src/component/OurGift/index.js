import React from "react";
import { DivTanggal,DivAtm ,DivAtasNama, ValueKartu,DivButtonSimpanKalender} from "./styled";
import CIP from './../../images/chip-atm-undangan.png'
import BSI from './../../images/bank-syariah-indonesia-ist_169-removebg-preview.png'
import Mandiri from './../../images/png-clipart-logo-bank-mandiri-credit-card-bank-text-logo-removebg-preview.png'
import { FaCopy } from "react-icons/fa";
const OurGift = ()=>{
    return(
        <div  style={{backgroundColor:"#43638B", height:'auto', paddingTop:'25px',paddingBottom:'25px',position:'relative', }}>
             <DivTanggal >
               
               KIRIM HADIAH
              

            </DivTanggal>
            <div style={{marginTop:'30px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

                <DivAtm  className="zoom">
                    <div style={{display:'flex',justifyContent:'end',background:'',marginRight:'-10px',marginTop:'-5px'}}>
                        <img alt="bsi" style={{width:'200px'}} src={BSI}></img>
                    </div>
                    <div style={{marginLeft:'30px',marginTop:'-55px'}}>

                    <img alt="cip" src={CIP} width={60} ></img>
                    </div>
                    <DivAtasNama>AN Rizqi Salsabila</DivAtasNama>
                    <ValueKartu>828323272783232</ValueKartu>
                    <div  style={{position:'absolute',display:'flex',justifyContent:'end',background:'',right:'20px',bottom:'15px'}}>
                        
                        <DivButtonSimpanKalender>
                        <FaCopy color=""></FaCopy>
                            Salin</DivButtonSimpanKalender>
                    </div>
                </DivAtm>
                <div style={{height:'30px'}}></div>
                <DivAtm className="muncul-kanan">
                    <div style={{display:'flex',justifyContent:'end',background:'',paddingRight:'20px',paddingTop:'30px'}}>
                        <img alt="mandiri" style={{width:'120px'}} src={Mandiri}></img>
                    </div>
                    <img  alt="cip" src={CIP} width={60} style={{marginLeft:'30px',marginTop:'-20px'}}></img>
                    <DivAtasNama>AN Nidzamuddin Muzakki</DivAtasNama>
                    <ValueKartu>828323272783232</ValueKartu>
                    <div  style={{position:'absolute',display:'flex',justifyContent:'end',background:'',right:'20px',bottom:'15px'}}>
                        <DivButtonSimpanKalender>
                        <FaCopy color=""></FaCopy>
                            Salin</DivButtonSimpanKalender>
                    </div>
                </DivAtm>
            </div>
       
        </div>
    )   
}

export default OurGift