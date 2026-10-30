import { Metadata } from "next";
import LoremIpsum from "../components/loremIpsum";

export const metadata: Metadata = {
  title: 'Gépeink',
  description: 'Main site, introduction'
};


export default function Gepeink() {
    return(
        <LoremIpsum fejlec={"Gépeink"} />
    );
}