import Image from 'next/image';
import './Fooldal.scss';
import mainImage from '../../../public/mainPic.jpg';
import LoremIpsum from '../loremIpsum';

export default function Fooldal() {
    return(
        <main>
            <div className='mainImgCont'>
                <Image className='mainImg' src={mainImage} alt={'Kezdőkép'}></Image>
            </div>
            <div className='flexRow w100'>
                <div className='topics bgDarkBlue'>Lemezburkolatok, panelek gyártása</div>
                <div className='topics bgBlue'>Információs táblák és pultok gyártása</div>
                <div className='topics bgLightBlue'>Alumínium és acél termékek gyártása</div>
            </div>
            <LoremIpsum fejlec={'Főoldal'} />
        </main>
    );
}