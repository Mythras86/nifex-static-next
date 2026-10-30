import { Metadata } from "next";
import LoremIpsum from "../components/loremIpsum";

export const metadata: Metadata = {
  title: 'Kapcsolat',
  description: 'Main site, introduction'
};


export default function Kapcsolat() {
    return(
        <LoremIpsum fejlec={'Kapcsolat'} />
    );
}