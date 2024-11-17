import React from "react";
import {DivNAMA3,DivNamaPengantin,DivKeteranganKeluarga,DivKeteranganNamaOrtu,DivNAMA,DivNAMA2,DivFOTO,DivFotoFlexContainer,DivGreatPleasure,DivInviteYou,DivCelebrate,DivLineGreate} from './styled'


const Foto = ()=>{

    
    return(
        <div>
            <DivGreatPleasure>
                <DivLineGreate/>WITH GREAT PLEASURE<DivLineGreate/>
            </DivGreatPleasure>
            <DivInviteYou>
                INVITE YOU
            </DivInviteYou>
            <DivCelebrate>
                To Celebrate Our marriage
            </DivCelebrate>
            <DivFotoFlexContainer  >
                <DivFotoFlexContainer className="muncul-kiri" id="pengantin1">

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
                </DivFotoFlexContainer>
                <DivFotoFlexContainer className="muncul-kanan" id="pengantin2">

                <DivFOTO   src="https://ehv9nqzx9ct.exactdn.com/wp-content/uploads/elementor/thumbs/02-11-qok9i647r7ylen0i0i3sehs8ub3zfg983daw5zho00.png?strip=all&lossy=1&w=159&ssl=1" >

                </DivFOTO>
                <DivNAMA2>
                    <DivNamaPengantin>Rizqi Salsabila</DivNamaPengantin>
                    <DivKeteranganKeluarga>Putri Kedua dari Keluarga</DivKeteranganKeluarga>
                    <DivKeteranganNamaOrtu>Bapak Hanafi & Ibu Isti</DivKeteranganNamaOrtu>

                </DivNAMA2>
                </DivFotoFlexContainer>
                
            </DivFotoFlexContainer>
            <div id="pengantin"></div>
        
        </div>
    )
}

export default Foto