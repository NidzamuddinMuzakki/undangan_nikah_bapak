import styled,{keyframes} from "styled-components";

export const  DivContainerTanggal = styled.div`
   display:flex;  
   justify-content:center;
   align-items:center;
   flex-direction:column;
   margin-bottom:50px;
    @media only screen and (min-width:268px){
      height:auto;
      margin-top:150px;
    }
    @media only screen and (min-width:768px){
      height:auto;
    }
    @media only screen and (min-width:1024px){
      height:auto;
       margin-top:180px;
    }
`

export const AcaraResepsi = styled.div`
     display: flex;
    flex-direction: column;
  
    container-widget-height: initial;
    container-widget-flex-grow: 0;
    container-widget-align-self: initial;
    flex-wrap-mobile: wrap;
    align-items: center;
    gap: 15px 15px;
    background-transition: 0.3s;
    border-style: solid;
   
    border-width: 5px 0px 5px 0px;
  
    border-color: #365071;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px 10px 10px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 35px;
    padding-bottom: 25px;
   padding-left:10px;
   padding-right:10px;
    
     @media only screen and (min-width:268px){
       width:85vw;
    }
    @media only screen and (min-width:768px){
      width:500px;
    }
    @media only screen and (min-width:1024px){
       width:500px;
       
    }
`

export const Title = styled.div`
   color: #C58815;
    font-family: "Croissant One", Sans-serif;
    font-size:35px;
    width:100%;
    text-align:center;
  
    font-weight: 500;
    text-transform: uppercase;
   
    text-shadow: 3px 2px 0 rgba(54.00000000000002, 80.00000000000001, 113.00000000000006, .09);
`

export const Tanggal = styled.div`
margin-bottom: -10px;
margin-top:-10px;
    color: #54595F;
    font-family: "Source Serif Pro", Sans-serif;
    font-size: 15px;
      
    width:100%;
    text-align:center;
    font-weight: 500;
    letter-spacing: 0;
`

export const ValueTanggal  = styled.div`
color: #43638B;
    font-family: "Croissant One", Sans-serif;
    font-size: 15px;
    font-weight: 400;
    width:100%;
    text-align:center;
    letter-spacing: -.5px;

`

export const ButtonDiv = styled.div`
--display: flex;
    --flex-direction: row;
    --container-widget-width: calc((1 - var(--container-widget-flex-grow))* 100%);
    --container-widget-height: 100%;
    --container-widget-flex-grow: 1;
    --container-widget-align-self: stretch;
    --flex-wrap-mobile: wrap;
    --justify-content: space-between;
    --align-items: center;
    --background-transition: 0.3s;
    --margin-top: 0px;
    --margin-bottom: 0px;
    --margin-left: 0px;
    --margin-right: 0px;
    --padding-top: 0px;
    --padding-bottom: 0px;
    --padding-left: 0px;
    --padding-right: 0px;
`

export const DivButtonSimpanKalender = styled.a`
    cursor:pointer;
    position:relative;
    z-index:10;
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
export const BungaAtasImageDiv = styled.img`
   
    @media only screen and (min-width:268px){
       width:300px;
    }
    @media only screen and (min-width:768px){
      width:400px;
    }
    @media only screen and (min-width:1024px){
        width:500px;
    }
`

const naikturun =  keyframes`
    0% { transform: translate(0px,0px); }
	50% { transform: translate(0px,-30px); }
	100% { transform: translate(0px,0px); }
`


export const BungaAtas = styled.div`
    position:relative;
   
    animation-name: ${naikturun};
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @media only screen and (min-width:268px){
       margin-top:50px;
    }
    @media only screen and (min-width:768px){
     margin-top:50px;
    }
    @media only screen and (min-width:1024px){
       margin-top:50px;
    }
`



