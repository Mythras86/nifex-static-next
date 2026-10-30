import { linkek } from "./Header";
import NavLink from "./NavLink";

export default function NavBar() {
    return(
        <nav className="flex1">
            <ul>
                <NavLink nev={linkek.fooldal.text} link={linkek.fooldal.link} urlHasthis={linkek.fooldal.link}></NavLink>
                <NavLink nev={linkek.referenciaink.text} link={linkek.referenciaink.link} urlHasthis={linkek.referenciaink.link}></NavLink>
                <NavLink nev={linkek.gepeink.text} link={linkek.gepeink.link} urlHasthis={linkek.gepeink.link}></NavLink>
                <NavLink nev={linkek.kapcsolat.text} link={linkek.kapcsolat.link} urlHasthis={linkek.kapcsolat.link}></NavLink>
                <NavLink nev={linkek.allasajanlat.text} link={linkek.allasajanlat.link} urlHasthis={linkek.allasajanlat.link}></NavLink>
            </ul>
        </nav>
    );
}