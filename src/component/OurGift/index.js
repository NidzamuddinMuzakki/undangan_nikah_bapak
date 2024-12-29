import React, { useEffect, useState } from "react";
import {AllComment,InputHadir,InputUcapan,InputNama,DivComment,DivLineTanggal, DivTanggal,DivAtm ,DivAtasNama, ValueKartu,DivButtonSimpanKalender, DivHeader, DivAllComment, DivCommentNama, DivCommentNamaWaktu, DivCommentUcapan} from "./styled";
import CIP from './../../images/chip-atm-undangan.png'
import BSI from './../../images/bank-syariah-indonesia-ist_169-removebg-preview.png'
import Bca from './../../images/bca.png'
import { FaCommentAlt, FaCopy } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import app from "./../../config/index";
import { getDatabase, ref, set, child, get} from "firebase/database";

import { getDeviceId } from "../../uuid";
import {  toast } from 'react-toastify';

function ltrim(str) {
    if(!str) return str;
    return str.replace(/^\s+/g, '');
  }

  function rtrim(str) {
    if(!str) return str;
    return str.replace(/\s+$/g, '');
  }

 var nidzam =  new RegExp("^[A-Za-z0-9? ,.]+$");
const OurGift = ({loading, setLoading})=>{
    const uuidNow = getDeviceId()
    
    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }
      

    const [show,setShow ]= useState(false)
    const [dataComment, setDataComment] = useState([])
  
    const [state, setState] = useState({
        konfirmasi:"",
        ucapan:"",
        nama:""
    })
    useEffect(()=>{
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef =  ref(db, "undanganNikah/comment");
            const snapshot = await get(dbRef);
            if(snapshot.exists()) {
                let  arr = Object.values(snapshot.val())
                arr.sort(function(a, b) {
                    return  new Date(b.created_at) - new Date(a.created_at) ;
                });
                setDataComment(arr);
            } else {
              console.log("error get data")
            }
          }
        fetchData()
    },[loading,setLoading])

    const handleChange = (e)=>{
        setState((da)=>{
            return({...da,[e.target.name]:e.target.value})
        })
    }
    const handleClickSubmit = ()=>{
        var name = state.nama
        var ucapan = state.ucapan

        name = ltrim(name)
        name = rtrim(name)

        ucapan = ltrim(ucapan)
        ucapan = rtrim(ucapan)

        if(ucapan==="" || name===""){
            toast.error("Isi data terlebih dahulu")
            return
        }

        if(!nidzam.test(ucapan)){
            toast.error("Ucapan Hanya Boleh aplhanum space titik dan koma")
            return
        }
        if(!nidzam.test(name)){
            toast.error("Nama Hanya Boleh aplhanum space titik dan koma")
            return
        }
        if(name.length>100){
            toast.error("Nama Hanya 100 karakter")
            return
        }

        if(ucapan.length>400){
            toast.error("Ucapan Hanya 400 karakter")
            return
        }

       
        
        const db = getDatabase(app);
        setLoading(true)
        get(child(ref(db, "undanganNikah/comment/"),uuidNow)).then((snap)=>{
            if(snap.exists()){
                setLoading(false)
                toast.error("Anda Sudah Mengirim Ucapan");
            }else{
                
                const newDocRef = child(ref(db, "undanganNikah/comment"),uuidNow);
                let ISO_8601_FORMAT = new Date();

                let now =  ISO_8601_FORMAT.toISOString()
                
                set(newDocRef, {
                    uuid:uuidNow,
                    nama: name,
                    ucapan: ucapan,
                    konfirmasi:state.konfirmasi,
                    created_at:now,
                }).then( () => {
                    toast.success("Sukses Kirim Ucapan");
                }).catch((error) => {
                    // console.log(error)
                    toast.error("Gagal Kirim Ucapan");
                }).finally(()=>{
                    setState({
                        konfirmasi:"",
                        ucapan:"",
                        nama:""
                    })
                    setLoading(false)
                })
            }
        })
       
        // // console.log(state)
    }
    // console.log(dataComment,"nidzam ganteng")
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
                <DivHeader onClick={()=>{dataComment?.length?setShow(!show):setShow(false)}}><FaCommentAlt></FaCommentAlt> {dataComment?.length} Comments</DivHeader>
                <div style={{height:'auto'}}>
                    <div style={{margin:'20px'}}>
                        <InputNama onChange={handleChange} value={state.nama} type="text" name="nama"  placeholder="Nama" placholde></InputNama>
                        <div style={{height:'6px'}}></div>
                        <InputUcapan onChange={handleChange} value={state.ucapan} type="text" name="ucapan" placeholder="Ucapan"></InputUcapan>
                        <div style={{height:'10px'}}></div>
                        <InputHadir onChange={handleChange} value={state.konfirmasi} name="konfirmasi">
                            <option  value="" disabled selected="">Konfirmasi Kehadiran</option>
                            <option  value="Hadir">Hadir</option>
                            <option value="Tidak Hadir">Tidak Hadir</option>
                        </InputHadir>
                        <div onClick={()=>{state.nama && state.ucapan && state.konfirmasi?handleClickSubmit():toast.error("Isi data terlebih dahulu")}} style={{display:'flex', marginTop:'20px',justifyContent:"end"}}>
                            <DivButtonSimpanKalender style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
                       
                            {/* <IoSend color=""></IoSend> */}
                            KIRIM
                            </DivButtonSimpanKalender>
                        </div>

                        <AllComment style={{marginTop:show?'30px':'0px',height:show?'auto':'0px',borderTop:show?'1px solid  #d5deea':'0px solid  #d5deea'}}>
                            {dataComment?.length?dataComment.map((val, key) =>(
                            <DivAllComment key={key}>
                                   <DivCommentNama>{val.nama}
                                        <DivCommentNamaWaktu>
                                            <IoTimeOutline></IoTimeOutline>
                                            {timeSince(new Date(val.created_at))}
                                            {/* 1 hour ago {Dat().valueOf()} */}
                                        </DivCommentNamaWaktu>
                                    </DivCommentNama> 
                                    <DivCommentNamaWaktu>({val.konfirmasi})</DivCommentNamaWaktu>
                                    <DivCommentUcapan>{val.ucapan}</DivCommentUcapan>
                            </DivAllComment>
                             ))
                            :""}

                            {/* <DivAllComment>
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
                            </DivAllComment> */}
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
                    <div style={{display:'flex',justifyContent:'end',background:'',marginRight:'40px',marginTop:'-5px'}}>
                        <img alt="bsi" style={{width:'120px'}} src={Bca}></img>
                    </div>
                    <div style={{marginLeft:'30px',marginTop:'-55px'}}>

                    <img alt="cip" src={CIP} width={60} ></img>
                    </div>
                    <DivAtasNama>AN Rizqi Salsabila</DivAtasNama>
                    <ValueKartu>0293018747</ValueKartu>
                    <div  style={{position:'absolute',display:'flex',justifyContent:'end',background:'',right:'20px',bottom:'15px'}}>
                        
                        <DivButtonSimpanKalender  onClick={() => { toast.success("Berhasil Salin");navigator.clipboard.writeText("0293018747")}}>
                        <FaCopy color=""></FaCopy>
                            Salin</DivButtonSimpanKalender>
                    </div>
                </DivAtm>
                <div style={{height:'30px'}}></div>
                <DivAtm className="muncul-kanan">
                    <div style={{display:'flex',justifyContent:'end',background:'',marginRight:'0px',marginTop:'-5px'}}>
                        <img alt="mandiri" style={{width:'200px'}} src={BSI}></img>
                    </div>
                    <img  alt="cip" src={CIP} width={60} style={{marginLeft:'30px',marginTop:'-60px'}}></img>
                    <DivAtasNama>AN Nidzamuddin Muzakki</DivAtasNama>
                    <ValueKartu>7282531978</ValueKartu>
                    <div  style={{position:'absolute',display:'flex',justifyContent:'end',background:'',right:'20px',bottom:'15px'}}>
                        <DivButtonSimpanKalender onClick={() => { toast.success("Berhasil Salin");navigator.clipboard.writeText("7282531978")}}>
                        <FaCopy color=""></FaCopy>
                            Salin</DivButtonSimpanKalender>
                    </div>
                </DivAtm>
            </div>
       
        </div>
    )   
}

export default OurGift