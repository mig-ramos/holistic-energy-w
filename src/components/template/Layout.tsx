import useAppData from "@/data/hooks/useAppData";
import ForcarAutenticacao from "../auth/ForcarAutenticacao";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";
import { Header } from "../home/Header";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData();
  return (
    
    <ForcarAutenticacao>
      <div className={`${tema} flex-col`}>
        <Header />
        <div className={`flex h-screen w-screen`}>
        <MenuLateral />
        <div
          className={`flex flex-col w-full p-7 bg-gray-100 dark:bg-gray-800`}
        >
          <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
          <Conteudo>{props.children}</Conteudo>
        </div>
        </div>
      </div>
    </ForcarAutenticacao>
  );
}