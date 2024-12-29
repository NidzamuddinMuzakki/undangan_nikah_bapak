import React from "react";
import {DIVPengantingRedirect,DivNamaPengantin2,DivKotakFOTO,DivNamaPengantin,DivKeteranganKeluarga,DivKeteranganNamaOrtu,DivNAMA2,DivFOTO,DivFOTO2,DivFotoFlexContainer,DivGreatPleasure,DivInviteYou,DivCelebrate,DivLineGreate, DivFOTO3, DivNamaPengantin3, DivKotakFOTO2, DivFOTO4, DivNAMA20} from './styled'

import Border1 from './../../images/02.png'
import Border2 from './../../images/01.png'
import NidzamImage from './../../images/1731908488185.jpg'


const Foto = ()=>{

    
    return(
        <div>
            <DivGreatPleasure >
                <DIVPengantingRedirect id="pengantin"></DIVPengantingRedirect>
                <DivLineGreate/>WITH GREAT PLEASURE<DivLineGreate/>
            </DivGreatPleasure>
            <DivInviteYou>
                INVITE YOU
            </DivInviteYou>
            <DivCelebrate>
                To Celebrate Our marriage
            </DivCelebrate>
            <DivFotoFlexContainer   >
            
                
                
                <DivKotakFOTO className="muncul-kiri">
                    <DivFOTO   src="https://ehv9nqzx9ct.exactdn.com/wp-content/uploads/elementor/thumbs/02-11-qok9i647r7ylen0i0i3sehs8ub3zfg983daw5zho00.png?strip=all&lossy=1&w=159&ssl=1" >
                    <DivNamaPengantin2>RS</DivNamaPengantin2>
                    </DivFOTO>
                    <DivFOTO2 >
                        <img src={Border2} style={{width:'100%',height:'100%'}} alt="border"></img>
                    </DivFOTO2>
                    <DivNAMA2>
                        <DivNamaPengantin>Rizqi Salsabila, S.E</DivNamaPengantin>
                        <DivKeteranganKeluarga>Putri Kedua dari Keluarga</DivKeteranganKeluarga>
                        <DivKeteranganNamaOrtu>Bapak Drs. H. Ahmad Hanafi, M.SI & Ibu Siti Istiqoriyah, S. Ag</DivKeteranganNamaOrtu>

                    </DivNAMA2>
                </DivKotakFOTO>
                <DivKotakFOTO2 className="muncul-kanan">
                    <DivFOTO4  src={NidzamImage} />
                        <DivNamaPengantin3>NM</DivNamaPengantin3>
                   
                    <DivFOTO3 >
                        <img src={Border1} style={{width:'100%',height:'100%'}} alt="border"></img>
                    </DivFOTO3>
                    <DivNAMA20>
                        <DivNamaPengantin>Nidzamuddin Muzakki, S.Kom</DivNamaPengantin>
                        <DivKeteranganKeluarga>Putra Kedua dari Keluarga</DivKeteranganKeluarga>
                        <DivKeteranganNamaOrtu>Bapak Ir. H. Niz'am & Ibu Ir. Hj. Mutmaini Hamidah S.Kom, MMA</DivKeteranganNamaOrtu>

                    </DivNAMA20>
                </DivKotakFOTO2>
                {/* <DivFotoFlexContainer className="muncul-kiri" id="pengantin1">

                <DivNAMA>
                    <DivNamaPengantin>Nidzamuddin Muzakki</DivNamaPengantin>
                    <DivKeteranganKeluarga>Putra Kedua dari Keluarga</DivKeteranganKeluarga>
                    <DivKeteranganNamaOrtu>Bapak Niz'am & Ibu Mutmaini</DivKeteranganNamaOrtu>

                </DivNAMA>
                <DivFOTO  src="https://ehv9nqzx9ct.exactdn.com/wp-content/uploads/elementor/thumbs/01-11-qok9i1f0t1s5sl7bry2nk0yxvdr5cyqkeq1grlomv4.png?strip=all&lossy=1&w=750&ssl=1" >

                </DivFOTO>
                <DivNAMA3>
                    <DivNamaPengantin>Nidzamuddin Muzakki</DivNamaPengantin>
                    <DivKeteranganKeluarga>Putra Kedua dari Keluarga</DivKeteranganKeluarga>
                    <DivKeteranganNamaOrtu>Bapak Niz'am & Ibu Mutmaini</DivKeteranganNamaOrtu>

                </DivNAMA3>
                </DivFotoFlexContainer> */}
                {/* <DivFotoFlexContainer className="muncul-kanan" id="pengantin2">

                
                <DivNAMA2>
                    <DivNamaPengantin>Rizqi Salsabila</DivNamaPengantin>
                    <DivKeteranganKeluarga>Putri Kedua dari Keluarga</DivKeteranganKeluarga>
                    <DivKeteranganNamaOrtu>Bapak Hanafi & Ibu Isti</DivKeteranganNamaOrtu>

                </DivNAMA2> */}
                {/* </DivFotoFlexContainer> */}
                
            </DivFotoFlexContainer>
            
        
        </div>
    )
}

export default Foto