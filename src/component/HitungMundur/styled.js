import styled from "styled-components";

export const DivTanggal = styled.div`
    color: #FFE4B2;
    display:flex;
   
    justify-content:center;
    font-family: "Crimson Pro", Sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align:center;
    gap:10px;
   
`

export const DivLineTanggal = styled.div`
    position:relative;
    top:-10px;
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
export const DivContainerKotakTanggal = styled.div`

    list-style: none;
    margin-top:25px;
    padding: 0;
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
   
`

export const DivKotakTanggal = styled.div`
    margin-right: 5px;
    margin-left: 5px;
    width:100px;
    padding-top:10px;
    padding-bottom:10px;

    border-style: solid;
    border-width: 2px 0 2px 0;
    border-color: #FFE4B2;
    border-radius: 5px 5px 5px 5px;
    background: #00000030;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media only screen and (min-width:268px){
        width:70px;
    }
    @media only screen and (min-width:768px){
        width:100px;
    }
    @media only screen and (min-width:1024px){
        width:100px;
    }
`

export const DivSpanNumber = styled.div`
    color: #FFF;
    font-family: "Abril Fatface", Sans-serif;
    font-size: 50px;
    line-height: 1.3em;
    @media only screen and (min-width:268px){
       font-size: 30px;
    }
    @media only screen and (min-width:768px){
        font-size: 50px;
    }
    @media only screen and (min-width:1024px){
       font-size: 50px;
    }
`

export const DivSpanType = styled.div`
    color: #fff;
    font-family: "El Messiri", Sans-serif;
    font-size: 16px;
    @media only screen and (min-width:268px){
       font-size: 13px;
    }
    @media only screen and (min-width:768px){
       font-size: 16px;
    }
    @media only screen and (min-width:1024px){
     font-size: 16px;
    }
`

export const DivButtonSimpanKalender = styled.a`
    cursor:pointer;
    text-decoration:none;
    background-color: #C89556;
    font-family: "Source Serif Pro", Sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    fill: #FFF;
    color: #FFF;
    width:180px;
    padding:8px 10px;
    border-radius: 3px 3px 3px 3px;
    display:flex;
    margin-top:40px;
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

export const DivMap = styled.div`
    position:absolute;
    bottom:-50px;
    margin: 25px 0 -100px 0;
    padding: 0 0 0 0;
    border-style: solid;
    border-width: 7px 7px 7px 7px;
    border-color: #365071;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0 25px 20px -15px rgb(0 0 0 / .25);
    width:80vw;

    @media only screen and (min-width:268px){
       bottom:-4px;
    }
    @media only screen and (min-width:768px){
        bottom:-50px;
    }
    @media only screen and (min-width:1024px){
       bottom:-50px;
    }

`