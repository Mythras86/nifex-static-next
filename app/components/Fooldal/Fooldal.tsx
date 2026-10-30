import Image from 'next/image';
import './Fooldal.scss';
import mainImage from '../../../public/mainPic.jpg';

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
            <div className='szovegTorzs'>
                <h1>Lemezmegmunkálás több évtizedes tapasztalattal</h1>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet architecto id ipsa fugit veniam eos voluptate aspernatur at. Voluptatum quisquam tempora incididunt dolores blanditiis illo ab excepteur molestias officia. Quasi fugit esse non magna anim veniam cupidatat mollit voluptatum enim ratione.
                    Exercitation porro commodo magnam quisquam atque. Eius porro ipsa officia labore enim nisi ut quis dicta exercitation. Quisquam quis proident quasi quae iusto sequi in aut duis odit in. Irure blanditiis ratione quasi ipsum incididunt elit. Officia magnam ipsa explicabo duis irure quis nemo ipsa obcaecati eius proident vitae consectetur.
                    Cupidatat accusamus quisquam et at mollit reprehenderit nemo in ratione odio. Mollit vero mollit excepteur molestias dolores porro exercitation consectetur corrupti sint ex magna excepteur. Adipiscing blanditiis animi quis blanditiis sit. Obcaecati in mollitia enim animi lorem. Do proident vero nemo deserunt id commodo commodo incididunt reprehenderit accusamus enim. Amet amet illo irure eiusmod odit sunt ratione.
                </div>
            </div>
        </main>
    );
}