import useAppData from "@/data/hooks/useAppData";
import ForcarAutenticacao from "../auth/ForcarAutenticacao";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
// import MenuLateral from "./MenuLateral;
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
      <div className={`${tema} flex flex-col`}>
        
        <div className={`flex w-full`}>
        <MenuLateral />
        <div
          className={`flex flex-col h-screen w-full bg-gray-100 dark:bg-gray-800`}
        >
          <Header />
          <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
          <hr className="mt-2 border border-slate-400" />
          <Conteudo>{props.children}</Conteudo>
        </div>
        </div>
      </div>
    </ForcarAutenticacao>
  );
}