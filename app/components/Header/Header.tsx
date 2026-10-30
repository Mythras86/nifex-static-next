import BurgerMenu from './BurgerMenu';
import './Header.scss';
import NavBar from './NavBar';

export const linkek = {
    fooldal: {link: '/', text: 'Főoldal'},
    referenciaink: {link: '/referenciaink', text: 'Referenciáink'},
    gepeink: {link: '/gepeink', text: 'Gépeink'},
    kapcsolat: {link: '/kapcsolat', text: 'Kapcsolat'},
    allasajanlat: {link: '/allasajanlat', text: 'Állásajánlat'},
}

export default function Header() {

    return(
        <header className={'mainHeader'}>
            <BurgerMenu></BurgerMenu>
            <div className='logo flex1'>
                NIFEX
            </div>
            <div className='navCont'>
                <NavBar></NavBar>
            </div>
        </header>
    );
}