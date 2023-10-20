import Head from "next/head";
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
      <main>
        <h1>Página inicial</h1>
        <Hero />
        <About />
        <Schedule />
        <Contact />
      </main>
    </>
  );
}
