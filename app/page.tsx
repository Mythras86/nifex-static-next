import { Metadata } from "next";
import Fooldal from "./components/Fooldal/Fooldal";

export const metadata: Metadata = {
  title: 'Főoldal',
  description: 'Main site, introduction'
};

export default function Home() {
  return (
    <Fooldal></Fooldal>
  );
}
