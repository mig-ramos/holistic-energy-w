import Head from "next/head";
import LayoutPublic from "../components/home/LayoutPublic";
import { Hero } from "../components/home/Hero";
import { About } from "../components/home/About";
import { Schedule } from "../components/home/Schedule";
import { Contact } from "../components/home/Contact";

export default function Home() {

  return (
    <>
      <Head>
        <title>Energia Holística</title>
        <meta
          name="description"
          content="Sistema web para terapeutas com agendamento de consultas"
        />
      </Head>
      <LayoutPublic>
        <Hero />
        <About />
        <Schedule />
        <Contact />
      </LayoutPublic>
    </>
  );
}
