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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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