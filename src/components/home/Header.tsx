import { ActiveLink } from "../ActiveLink";
import Image from "next/image";
import Logo from "public/images/side-azul.png";

export function Header() {
  let linkActive ='text-orange-600';
  return (
    <header
      className={`w-full bg-blue-300 dark:bg-gray-900 dark:text-gray-100 font-bold text-xl`}
    >
      <nav className={`max-w-6xl flex items-center h-18 mx-auto`}>
        <div className="flex items-center justify-center">
          <ActiveLink href={"/"}>
            <Image src={Logo} alt="Logo do site" width={48} placeholder={`empty`} />
          </ActiveLink>
        </div>
        <div className={`flex-grow ml-6`}>
          <ActiveLink href={"/"} activeClassName={linkActive}>
            <span>Home</span>
          </ActiveLink>
          <ActiveLink href={"/about"} activeClassName={linkActive}>
            <span>Sobre</span>
          </ActiveLink>
          <ActiveLink href={"/services"} activeClassName={linkActive}>
            <span>Serviços</span>
          </ActiveLink>
          <ActiveLink href={"/local"} activeClassName={linkActive}>
            <span>Localização</span>
          </ActiveLink>
          <ActiveLink href={"/dashboard"} activeClassName={linkActive}>
            <span>Área do Cliente</span>
          </ActiveLink>
        </div>
        <div>
          <button className={`hover:text-white font-bold text-xl mx-6`} onClick={() => alert('Saindo')}>Sair</button>
        </div>
      </nav>
    </header>
  );
}
