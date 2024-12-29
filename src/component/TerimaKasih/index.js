import {DivSampaiJumpa,ImageKBlend,DivLineTanggal,ImageK2,DivTanggal,DivTanggal1, DivTerimaKasih,ImageK, DivTanggal3, DivAtasKehadiran, DivAtasKehadiranSub} from './styled'
import Image1 from './../../images/02-21.png'
import Image2 from './../../images/03-12.png'
import IMage3 from './../../images/360_F_391976995_l4pRVLGFJHsqa2ZCY7LBknYVhKuwH6Vs-removebg-preview.png'
const TerimaKasih =()=>{
    return(
        <div style={{padding:'',background:'#43648c',display:'flex',alignItems:'center',flexDirection:'column'}}>
            
          
          
          <DivTerimaKasih>
            <div style={{height:'10px'}}></div>
            <DivTanggal style={{width:'95%'}}  className='zoom'>
                <DivLineTanggal style={{width:'13.1%'}}/>
                Terima Kasih
                <DivLineTanggal style={{width:'13.1%'}}/>

            </DivTanggal>
            <div style={{height:'10px'}}></div>

            <DivAtasKehadiran className='zoom'>Atas Kehadiran & Doa Restunya</DivAtasKehadiran>
            <DivAtasKehadiranSub className='muncul'>Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan terima kasih.</DivAtasKehadiranSub>
            <DivSampaiJumpa className='zoom'>Sampai Jumpa di Hari Bahagia Kami,</DivSampaiJumpa>
            <div style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}>

                <ImageK2 alt="a"  src={Image1} className='muncul-kanan'></ImageK2>
                <DivTanggal1 className='zoom'>RIZQI & NIDZAM</DivTanggal1>
                <ImageK alt='b' src={Image2} className='muncul-kiri'></ImageK>
            </div>
            <div style={{height:'5px'}}></div>
            <DivTanggal3 className='zoom' style={{width:'95%'}}>
                <DivLineTanggal style={{width:'45%'}}/>
                <ImageKBlend  src={IMage3} alt='c' />
                <DivLineTanggal style={{width:'45%'}}/>

            </DivTanggal3>
            
            <div style={{height:'20px'}}></div>
            
          </DivTerimaKasih>
        </div>
    )
}
export default TerimaKasih