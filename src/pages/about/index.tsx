import LayoutPublic from "../../components/home/LayoutPublic";
import Titulo from "../../components/home/Titulo";

export default function About() {
  return (
    <LayoutPublic>
      <div
        className={`flex flex-col bg-white dark:bg-gray-800
    dark:text-gray-200 w-full pt-4`}
      >
        <div className={`flex w-11/12 mx-auto justify-center`}>
          <Titulo titulo="Sobre mim" subtitulo="Minhas especialidades!" />
        </div>
      </div>
    </LayoutPublic>
  );
}
