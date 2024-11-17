import styled from "styled-components";

export const DivLineGreate = styled.div`
    position:relative;
    top:-7.5px;
    width:100px;
    border-bottom:1px solid #43638B;
    @media only screen and (min-width:268px){
       width:50px;
    }
    @media only screen and (min-width:768px){
       width:100px;
    }
    @media only screen and (min-width:1024px){
      width:100px;
    }
`
export const DivGreatPleasure = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    padding: 8px 35px 8px 35px;
    margin-top:80px;
    gap:15px;
    color: #43638B;
    font-family: "Crimson Pro", Sans-serif;
    font-size: 18px;
    font-weight: 300;
    @media only screen and (min-width:268px){
       margin-top:-10vh;
       font-size: 18px;
    }
    @media only screen and (min-width:768px){
       margin-top:80px;
       font-size: 18px;
    }
    @media only screen and (min-width:1024px){
       margin-top:80px;
       font-size: 18px;
    }
`

export const DivInviteYou = styled.div`
    color: #C58815;
    text-align:center;
    font-family: "Croissant One", Sans-serif;
    font-size: 45px;
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0 6px 6px rgb(0 0 0 / .19);
`

export const DivCelebrate = styled.div`
    color: #54595F;
    margin-top:5px;
    font-family: "Source Serif Pro", Sans-serif;
    font-size: 16px;
    letter-spacing: 1.5px;
    text-align:center;
`

export const DivFotoFlexContainer = styled.div`
    display:flex;
    align-items:center;
    position:relative; 
    justify-content:center;
    gap:20px;
    margin:50px 40px;
    oveflow:hidden;
    @media only screen and (min-width:268px){
        flex-direction:column;
    }
    @media only screen and (min-width:768px){  
       flex-direction:column;
    }
    @media only screen and (min-width:1024px){
      
       flex-direction:row;
    }
`

export const DivNAMA = styled.div`
    width:300px;
    text-align:end;
    @media only screen and (min-width:268px){
        text-align:center;
        display:none;
    }
    @media only screen and (min-width:768px){  
        text-align:end;
         display:block;
    }
    @media only screen and (min-width:1024px){
       display:block;
       text-align:end;
    }
`

export const DivNAMA3 = styled.div`
    width:300px;
    text-align:end;
    @media only screen and (min-width:268px){
        text-align:center;
        display:block;
    }
    @media only screen and (min-width:768px){  
        text-align:end;
        display:none;
    }
    @media only screen and (min-width:1024px){
      display:none;
       text-align:end;
    }
`
export const DivNAMA2 = styled.div`
    text-align:start;
    width:300px;
    @media only screen and (min-width:268px){
        text-align:center;
    }
    @media only screen and (min-width:768px){  
        text-align:start;
    }
    @media only screen and (min-width:1024px){
      
       text-align:start;
    }
`
export const DivNamaPengantin = styled.div`
    margin-bottom: 0;
    color: #43638B;
    font-family: "Croissant One", Sans-serif;
    font-size: 25px;
    letter-spacing: -2.5px;
    @media only screen and (min-width:268px){
        font-size: 23px;
    }
    @media only screen and (min-width:768px){  
        font-size: 25px;
    }
    @media only screen and (min-width:1024px){
      font-size: 25px;
    }
`
export const DivKeteranganKeluarga = styled.div`
    margin-top:5px;
    margin-bottom:5px;
    color: #54595F;
    font-family: "Source Serif Pro", Sans-serif;
    font-size: 16px;
    font-weight: bold;
    @media only screen and (min-width:268px){
        font-size: 15px;
    }
    @media only screen and (min-width:768px){  
        font-size: 16px;
    }
    @media only screen and (min-width:1024px){
      font-size: 16px;
    }
    
`
export const DivKeteranganNamaOrtu = styled.div`
    color: #54595F;
    font-family: "Source Serif Pro", Sans-serif;
    font-size: 16px;
    font-weight: 400;
    @media only screen and (min-width:268px){
        font-size: 15px;
         margin-bottom:-100px;
    }
    @media only screen and (min-width:768px){  
        font-size: 16px;
         margin-bottom:0px;
    }
    @media only screen and (min-width:1024px){
      font-size: 16px;
      margin-bottom:0px;
    }
`

export const DivFOTO = styled.img`
    display:flex;
    align-items:center;
    width:180px;
    height:180px;
    border-radius:10px;
`