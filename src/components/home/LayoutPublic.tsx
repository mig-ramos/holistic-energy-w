import useAppData from "@/data/hooks/useAppData";
import Conteudo from "./Conteudo";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutPublicProps {
  children?: any;
}

export default function LayoutPublic(props: LayoutPublicProps) {
  const { tema } = useAppData();
  return (
    <div className={tema}>
      <Header />
      <Conteudo>{props.children}</Conteudo>
      <Footer />
    </div>
  );
}
