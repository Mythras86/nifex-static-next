import Image from 'next/image';
import './Fooldal.scss';
import mainImage from '../../../public/mainPic.jpg';
import LoremIpsum from '../loremIpsum';

export default function Fooldal() {
    return(
        <main>
            <div className='mainImgCont'>
                <Image className='mainImg' src={mainImage} alt={'Kezdőkép'} objectFit={'cover'}></Image>
            </div>
            <div className='flexRowNowrap'>
                <div className='flex1 topics bgDarkBlue'>Lemezburkolatok, panelek gyártása</div>
                <div className='flex1 topics bgBlue'>Információs táblák és pultok gyártása</div>
                <div className='flex1 topics bgLightBlue'>Alumínium és acél termékek gyártása</div>
            </div>
            <LoremIpsum fejlec={'Főoldal'} />
        </main>
    );
}