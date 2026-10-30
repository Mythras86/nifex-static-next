import { Metadata } from "next";
import LoremIpsum from "../components/loremIpsum";

export const metadata: Metadata = {
  title: 'Állásajanlát',
  description: 'Main site, introduction'
};


export default function Allasajanlat() {
    return(
        <LoremIpsum fejlec={'Állásajánlat'} />
    );
}