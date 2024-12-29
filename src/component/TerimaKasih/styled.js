import styled from "styled-components";

import IMage3 from './../../images/360_F_391976995_l4pRVLGFJHsqa2ZCY7LBknYVhKuwH6Vs-removebg-preview.png'

export const DivAtasKehadiran = styled.div`
    color: white;
    text-align:center;
    font-family: "Croissant One", Sans-serif;
    width:95%;
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);
    margin-top:20px;
    @media only screen and (min-width:268px){
        font-size: 10px;
    }
    @media only screen and (min-width:768px){
        font-size: 10px;
    }
    @media only screen and (min-width:1024px){
        font-size: 10px;
    }
    
`

export const DivAtasKehadiranSub = styled.div`
    color:white;
    text-align:center;
    margin-top:20px;
    margin-bottom:20px;
    width:95%;
  
    font-weight: 500;
    font-family: "Source Serif Pro", Sans-serif;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);

    @media only screen and (min-width:268px){
        font-size: 9px;
    }
    @media only screen and (min-width:768px){
        font-size: 9px;
    }
    @media only screen and (min-width:1024px){
        font-size: 9px;
    }
    
`

export const DivSampaiJumpa = styled.div`
    color:white;
    text-align:center;
    margin-top:10px;
    margin-bottom:20px;
    width:90%;
    font-weight: 500;
    font-family: "Source Serif Pro", Sans-serif;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);

    @media only screen and (min-width:268px){
        font-size: 9.5px;
    }
    @media only screen and (min-width:768px){
        font-size: 9.5px;
    }
    @media only screen and (min-width:1024px){
        font-size: 9.5px;
    }
    
`


export const DivTerimaKasih = styled.div`
    width:85vw;
    border-radius:10px;
    background: rgb(0 0 0 / .1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display:flex;
    margin:30px;
    align-items:center;
    flex-direction:column;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

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


export const DivTanggal3 = styled.div`
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
    
     text-transform: uppercase;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);
   
`

export const DivTanggal1 = styled.div`
    color: #FFE4B2;
    display:flex;
    margin-top:10px;
    position:relative;
    top:-5px;
    justify-content:center;
    font-family: "Crimson Pro", Sans-serif;
    width:100px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align:center;
    

     text-transform: uppercase;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);
     @media only screen and (min-width:268px){
        font-size: 35px;
    }
    @media only screen and (min-width:768px){
         font-size: 50px;
    }
    @media only screen and (min-width:1024px){
    font-size: 50px;
    }
   
`

export const ImageK = styled.img`
   
     @media only screen and (min-width:268px){
        width:60px;
        margin-left:40px;
    }
    @media only screen and (min-width:768px){
        width:100px;
    }
    @media only screen and (min-width:1024px){
        width:100px;
    }
`
export const ImageK2 = styled.img`
   
     @media only screen and (min-width:268px){
        width:60px;
        margin-right:40px;
    }
    @media only screen and (min-width:768px){
        width:100px;
    }
    @media only screen and (min-width:1024px){
        width:100px;
    }
`


export const ImageKBlend = styled.div`
    position: relative;
   background:linear-gradient(
#C58815
,
#C58815
),
                url(${IMage3});
    width:30px;
    height:30px;
    border-radius:50%;
    top:0px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-position: center;
    background-repeat: no-repeat;
  background-blend-mode: overlay;
            background-size: cover;
            
 
`