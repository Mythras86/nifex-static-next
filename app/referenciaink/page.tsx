import { Metadata } from "next";
import LoremIpsum from "../components/loremIpsum";

export const metadata: Metadata = {
  title: 'Referenciáink',
  description: 'Main site, introduction'
};


export default function Referenciaink() {
    return(
        <LoremIpsum fejlec={'Referenciák'} />
    );
}