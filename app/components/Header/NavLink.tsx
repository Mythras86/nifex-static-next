'use client';

import Link from "next/link";
import './Header.scss';
import { usePathname } from "next/navigation";

interface Props {
    nev: string;
    link: string;
    urlHasthis: string;
}

export default function NavLink({nev, link, urlHasthis}: Props) {

    const path = usePathname();

    function isSelected() {
        if (path === urlHasthis) {
            return 'selected';
        } else {
            return 'selectable';
        }
    }

    return(
        <li className={'navList'}>
            <Link className={'navLink ' +isSelected()} href={link}>{nev}</Link>
        </li>
    );
}