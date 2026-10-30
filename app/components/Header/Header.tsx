import './Header.scss';
import NavLink from './NavLink';

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
            <div className='flex1'>
                <div className='logo'>NIFEX</div>
            </div>
            <div className='flex1'>
                <nav>
                    <ul>
                        <NavLink nev={linkek.fooldal.text} link={linkek.fooldal.link} urlHasthis={linkek.fooldal.link}></NavLink>
                        <NavLink nev={linkek.referenciaink.text} link={linkek.referenciaink.link} urlHasthis={linkek.referenciaink.link}></NavLink>
                        <NavLink nev={linkek.gepeink.text} link={linkek.gepeink.link} urlHasthis={linkek.gepeink.link}></NavLink>
                        <NavLink nev={linkek.kapcsolat.text} link={linkek.kapcsolat.link} urlHasthis={linkek.kapcsolat.link}></NavLink>
                        <NavLink nev={linkek.allasajanlat.text} link={linkek.allasajanlat.link} urlHasthis={linkek.allasajanlat.link}></NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
}