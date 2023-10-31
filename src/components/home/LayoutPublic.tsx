import Conteudo from "./Conteudo";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutPublicProps {
  children?: any;
}

export default function LayoutPublic(props: LayoutPublicProps) {
  return (
    <div className={`ligth`}>
      <Header />
      <Conteudo>{props.children}</Conteudo>
      <Footer />
    </div>
  );
}
