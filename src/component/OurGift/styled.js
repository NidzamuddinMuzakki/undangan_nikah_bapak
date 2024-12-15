import styled from "styled-components";
import BacgroundIMG from './../../images/Background-atm-invitren.jpg'
export const DivTanggal = styled.div`
    color: #FFE4B2;
    display:flex;
    margin-top:10px;
    justify-content:center;
    font-family: "Crimson Pro", Sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align:center;
    gap:10px;
     text-transform: uppercase;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);
   
`

export const DivAtm = styled.div`
    position:relative;
    background-image:url(${BacgroundIMG});
    height:250px;
    width:80vw;
    border-radius:20px;
    background-position: center center;
    background-size: cover;
   box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    @media only screen and (min-width:268px){
        width:88vw;
    }
    @media only screen and (min-width:768px){
      width:500px;
    }
    @media only screen and (min-width:1024px){
        width:500px;
    }
`

export const DivLineTanggal = styled.div`
    position:relative;
    top:-15px;
    width:50px;
    border-bottom:1px solid #C58815;
    @media only screen and (min-width:268px){
       width:50px;
    }
    @media only screen and (min-width:768px){
       width:70px;
    }
    @media only screen and (min-width:1024px){
      width:70px;
    }
`


export const DivAtasNama = styled.div`
    color: #c79456;
    margin-top:10px;
    font-family: "Croissant One", Sans-serif;
   
    font-weight: 500;
    margin-left:30px;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);

    @media only screen and (min-width:268px){
        font-size: 18px;
    }
    @media only screen and (min-width:768px){
        font-size: 24px;
    }
    @media only screen and (min-width:1024px){
        font-size: 24px;
    }
    
`
export const ValueKartu  = styled.div`
    color: #43638B;
    margin-top:10px;
    font-family: "Croissant One", Sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
   
    margin-left:30px;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);

`

export const DivButtonSimpanKalender = styled.div`
    cursor:pointer;
    background-color: #C89556;
    font-family: "Source Serif Pro", Sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    fill: #FFF;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    color: #FFF;
    padding:8px 15px;
    border-radius: 10px;
    display:flex;
    margin-top:0px;
    justify-content:center;
    align-items:center;
    gap:10px;
    transition-duration: .3s;
     transition-property: transform;
    transition-timing-function: ease-out;
    &:hover{
        transform: translateY(-8px);
        background-color:#A26F31;
    }
    &:focus{
        transform: translateY(-8px);
        background-color:#A26F31;

    }
`

export const DivComment = styled.div`
    width:85vw;
    height:auto;
    border: 1px solid #e0dcd1;
    background:#f5f3ed;
    border-radius:20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

export const DivHeader = styled.div`
    cursor:pointer;
    
    border-bottom: 1px solid #e0dcd1;
    display:flex;
    padding-left:20px;
    color: #C58815;
    font-family: "Croissant One", Sans-serif;
    padding-right:20px;
    text-shadow: 3px 2px 0 rgba(54.00000000000002, 80.00000000000001, 113.00000000000006, .09);

    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    padding-top:10px;
    padding-bottom:10px;

    align-items:center;
    gap:10px;
    

`

export const InputNama = styled.input`
    border-radius:5px;
    width: 100%;
    height: 2em;
     font-family: "Source Serif Pro", Sans-serif;
    margin: 0 0 5px;
    padding: 3px 6px;
    border: 1px solid #d5deea;
    background: #fff;
    color: #44525f;
    box-shadow: none;
    text-indent: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
   
    font-size: 1em;
    line-height: 1;
    vertical-align: top;
    font-size: 15px;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
   
`
export const InputUcapan = styled.textarea`
border: 1px solid #d5deea;
border-radius:5px;
 font-family: "Source Serif Pro", Sans-serif;
    border-width: 1px;
    width: 100%;
    height: 2.5em;
    min-height: 5em !important;
    margin: 0 !important;
    padding: 4px 6px;
   
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    transition: height 0.8s;
    -webkit-transition: height 0.2s;
    -moz-transition: height 0.2s;
    
    font-size: 1em;
    line-height: 19px;
    resize: vertical !important;
    background: #fff;
    color: #44525f;

    vertical-align: top;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`

export const InputHadir = styled.select`
    border: 1px solid #d5deea;
    border-radius:5px;
     font-family: "Source Serif Pro", Sans-serif;
    cursor:pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    border-width: 1px;
    width: 100%;
    height: 2em !important;
    margin: 0 !important;
    padding: 1px 3px;
   
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    transition: height 0.2s;
    -webkit-transition: height 0.2s;
    -moz-transition: height 0.2s;
   
    font-size: 1em;
    line-height: 19px;
    resize: vertical !important;
    background: #fff;
    color: #44525f;
    vertical-align: top;
`

export const AllComment = styled.div`
   
    height:auto;
    max-height:300px;
    overflow-x:hidden;
    overflow-y:auto;
  
    
    transition:height 0.3s;
`

export const DivAllComment = styled.div`
    margin-top:20px;
    margin-bottom:20px;


    
`

export const DivCommentNama = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    font-family: "Source Serif Pro", Sans-serif;
    color: #C58815;
    font-weight:bold;
    font-size:15px;
`

export const DivCommentNamaWaktu = styled.div`
    display:flex;
    align-items:center;
    font-family: "Source Serif Pro", Sans-serif;
    color: #54595F;
     font-weight:300;
     opacity:0.8;
    gap:5px;
`

export const DivCommentUcapan = styled.div`
   
    font-family: "Source Serif Pro", Sans-serif;
    color:gray;
   
  font-size:15px;
    margin-top:5px;
    
      word-wrap: break-word;    
     
      white-space: pre-wrap;
`
