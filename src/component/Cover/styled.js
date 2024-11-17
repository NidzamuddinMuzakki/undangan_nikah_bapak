import styled, { keyframes } from "styled-components";
import ImageBackground from './../../images/paper-1.png'


const goyang1 =  keyframes`
    0% { transform: rotate(0deg) scale(1);}
    50% { transform: rotate(10deg) scale(1.1);}
    75% { transform: rotate(-5deg) scale(1.1);}
    100% { transform: rotate(0deg) scale(1);}
`


export const BungaAtasImageDiv = styled.img`
    width:350px;
    @media only screen and (min-width:268px){
       width:300px;
    }
    @media only screen and (min-width:768px){
      width:350px;
    }
    @media only screen and (min-width:1024px){
        width:320px;
    }
`

export const BungaBawahImageDiv = styled.img`
    width:350px;
    @media only screen and (min-width:268px){
       width:300px;
    }
    @media only screen and (min-width:768px){
      width:350px;
    }
    @media only screen and (min-width:1024px){
        width:320px;
    }
`
export const BungaAtas = styled.div`
    position:absolute;
    top:-30px;
    animation-name: ${goyang1};
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @media only screen and (min-width:268px){
       top:-80px;
    }
    @media only screen and (min-width:768px){
       top:-100px;
    }
    @media only screen and (min-width:1024px){
        top:-80px;
    }
`

export const BungaBawah = styled.div`
    position:absolute;
    bottom:-40px;
    animation-name: ${goyang1};
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @media only screen and (min-width:268px){
       bottom:-90px;
    }
    @media only screen and (min-width:768px){
       bottom:-110px;
    }
    @media only screen and (min-width:1024px){
        bottom:-100px;
    }
`


export const CoverDiv = styled.div`
    width:700px;
    height:80vh;
    max-height:90vh;
    max-width:90vw;
    padding:0px 30px;
    position:relative;
   
    background-image:url(${ImageBackground});
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
    border-radius:40px;
    border:5px solid white;
    @media only screen and (min-width:268px){
        width:70vw;
        height:500px;
    }
    
    @media only screen and (min-width:768px){
        width:70vw;
        height:70vh;
    }
    @media only screen and (min-width:1024px){
        width:700px;
        height:80vh;
    }
        
`

export const DivNamaPengantin = styled.div`
    color: #C58815;
    text-align:center;
    font-family: "Croissant One", Sans-serif;
    font-size: 80px;
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);

    @media only screen and (min-width:268px){
        font-size: 60px;
    }
    @media only screen and (min-width:768px){
        font-size: 70px;
    }
    @media only screen and (min-width:1024px){
        font-size: 80px;
    }
    
`

export const DivTheWedding = styled.div`
    margin-top:-5px;
    color: #43638B;
    font-family: "Crimson Pro", Sans-serif;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 0;
`

export const DivTanggal = styled.div`
    color: #54595F;
    margin-top:20px;
    font-family: "Source Serif Pro", Sans-serif;
    font-size: 16px;
    letter-spacing: 1.5px;
`

export const DivAppreciate = styled.div`
    color: #54595F;
    font-family: "Source Serif Pro", Sans-serif;
    font-size: 16px;
    letter-spacing: 1.5px;
`

export const DivTamuUNdangan = styled.div`
    margin: 20px 0 0 0;
    padding: 8px 35px 8px 35px;
    border-style: solid;
    border-width: 1px 0 1px 0;
    border-color: #43638B;
    color: #43638B;
    font-family: "Crimson Pro", Sans-serif;
    font-size: 20px;
    font-weight: 500;
`

export const ABukaUndangan = styled.div`
    margin-top:20px;
    text-decoration:none;
    background-color: #C89556;
    font-family: "Source Serif Pro", Sans-serif;
    letter-spacing: 2px;
    display:flex;
    align-items:center;
    font-size:15px;
    fill: #FFF;
    color: #FFF;
    border-radius: 5px 5px 5px 5px;
    width:auto;
    padding:10px 20px;
     transition-duration: .3s;
    transition-property: transform;
    transition-timing-function: ease-out;
    cursor:pointer;
    &:hover{
        transform: translateY(-8px);
        background-color:#A26F31;
    }
    &:focus{
        transform: translateY(-8px);
        background-color:#A26F31;

    }
`

export const DivMohonMaaf = styled.div`
    color: #54595F;
    margin-top:25px;
    font-family: "Source Serif Pro", Sans-serif;
    font-size: 14px;
    letter-spacing: 0;

    @media only screen and (min-width:268px){
          font-size: 10px;
    }
    @media only screen and (min-width:768px){
          font-size: 14px;
    }
    @media only screen and (min-width:1024px){
         font-size: 14px;
    }
`


