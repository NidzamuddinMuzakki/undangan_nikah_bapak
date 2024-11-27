import React, { useState } from "react";
import {AllComment,InputHadir,InputUcapan,InputNama,DivComment,DivLineTanggal, DivTanggal,DivAtm ,DivAtasNama, ValueKartu,DivButtonSimpanKalender, DivHeader, DivAllComment, DivCommentNama, DivCommentNamaWaktu, DivCommentUcapan} from "./styled";
import CIP from './../../images/chip-atm-undangan.png'
import BSI from './../../images/bank-syariah-indonesia-ist_169-removebg-preview.png'
import Mandiri from './../../images/png-clipart-logo-bank-mandiri-credit-card-bank-text-logo-removebg-preview.png'
import { FaCommentAlt, FaCopy } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const OurGift = ()=>{
    const [show,setShow ]= useState(false)
    return(
        <div  style={{backgroundColor:"#43638B", height:'auto', paddingTop:'25px',paddingBottom:'25px',position:'relative', }}>
             <DivTanggal className="muncul" style={{fontSize:'28px'}} >
             <DivLineTanggal style={{top:'-13px'}}/>
               Doa & Ucapan
               <DivLineTanggal style={{top:'-13px'}} />

            </DivTanggal>
            <div style={{height:'30px'}}></div>
            <div style={{width:'100vw',height:'auto', display:'flex', justifyContent:'center'}}>
            <DivComment className="zoom">
                <DivHeader onClick={()=>{setShow(!show)}}><FaCommentAlt></FaCommentAlt> {0} Comments</DivHeader>
                <div style={{height:'auto'}}>
                    <div style={{margin:'20px'}}>
                        <InputNama type="text" name="nama"  placeholder="Nama" placholde></InputNama>
                        <div style={{height:'6px'}}></div>
                        <InputUcapan type="text" name="ucapan" placeholder="Ucapan"></InputUcapan>
                        <div style={{height:'10px'}}></div>
                        <InputHadir name="konfirmasi">
                            <option  value="" disabled selected="">Konfirmasi Kehadiran</option>
                            <option  value="Hadir">Hadir</option>
                            <option value="Tidak Hadir">Tidak Hadir</option>
                        </InputHadir>
                        <div style={{display:'flex', marginTop:'20px',justifyContent:"end"}}>
                            <DivButtonSimpanKalender style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
                       
                            {/* <IoSend color=""></IoSend> */}
                            KIRIM
                            </DivButtonSimpanKalender>
                        </div>

                        <AllComment style={{marginTop:show?'30px':'0px',height:show?'300px':'0px',borderTop:show?'1px solid  #d5deea':'0px solid  #d5deea'}}>
                            <DivAllComment>
                                   <DivCommentNama>Nidzam
                                        <DivCommentNamaWaktu>
                                            <IoTimeOutline></IoTimeOutline>
                                            1 hour ago
                                        </DivCommentNamaWaktu>
                                    </DivCommentNama> 
                                    <DivCommentUcapan>asasasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</DivCommentUcapan>
                            </DivAllComment>

                            <DivAllComment>
                                   <DivCommentNama>Nidzam
                                        <DivCommentNamaWaktu>
                                            <IoTimeOutline></IoTimeOutline>
                                            1 hour ago
                                        </DivCommentNamaWaktu>
                                    </DivCommentNama> 
                                    <DivCommentUcapan>asasasa</DivCommentUcapan>
                            </DivAllComment>
                            <DivAllComment>
                                   <DivCommentNama>Nidzam
                                        <DivCommentNamaWaktu>
                                            <IoTimeOutline></IoTimeOutline>
                                            1 hour ago
                                        </DivCommentNamaWaktu>
                                    </DivCommentNama> 
                                    <DivCommentUcapan>asasasa</DivCommentUcapan>
                            </DivAllComment>
                            <DivAllComment>
                                   <DivCommentNama>Nidzam
                                        <DivCommentNamaWaktu>
                                            <IoTimeOutline></IoTimeOutline>
                                            1 hour ago
                                        </DivCommentNamaWaktu>
                                    </DivCommentNama> 
                                    <DivCommentUcapan>asasasa</DivCommentUcapan>
                            </DivAllComment>

                            <DivAllComment>
                                   <DivCommentNama>Nidzam
                                        <DivCommentNamaWaktu>
                                            <IoTimeOutline></IoTimeOutline>
                                            1 hour ago
                                        </DivCommentNamaWaktu>
                                    </DivCommentNama> 
                                    <DivCommentUcapan>asasasa</DivCommentUcapan>
                            </DivAllComment>
                            <DivAllComment>
                                   <DivCommentNama>Nidzam
                                        <DivCommentNamaWaktu>
                                            <IoTimeOutline></IoTimeOutline>
                                            1 hour ago
                                        </DivCommentNamaWaktu>
                                    </DivCommentNama> 
                                    <DivCommentUcapan>asasasa</DivCommentUcapan>
                            </DivAllComment>
                            <DivAllComment>
                                   <DivCommentNama>Nidzam
                                        <DivCommentNamaWaktu>
                                            <IoTimeOutline></IoTimeOutline>
                                            1 hour ago
                                        </DivCommentNamaWaktu>
                                    </DivCommentNama> 
                                    <DivCommentUcapan>asasasa</DivCommentUcapan>
                            </DivAllComment>
                        </AllComment>
                       
                    </div>
                </div>
            </DivComment>

            </div>
            <div style={{height:'60px'}}></div>
             
             <DivTanggal className="zoom" >
             <DivLineTanggal/>
               Hadiah Spesial
               <DivLineTanggal/>

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