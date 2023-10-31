"use client"
import { ActiveLink } from "../ActiveLink";
import Image from "next/image";
import Logo from "public/images/Logo-B.svg";
import LogoDark from "public/images/logo-dark.svg";
import { AuthContext } from "@/data/contexts/AuthContext";
import AppContext from "@/data/contexts/AppContext";
import { useContext } from "react";

export function Header() {
  const { signOut, isAuthenticated } = useContext(AuthContext);
  const { tema } = useContext(AppContext);
  let linkActive = "text-orange-500";

  return (
    <header
      className={`w-full bg-lime-50 dark:bg-gray-900 dark:text-gray-100 font-bold text-xl`}
    >
      <nav className={`lg:max-w-6xl flex flex-col items-center h-auto lg:h-18 mx-auto lg:flex-row`}>
        <div className="flex items-center justify-center">
          <ActiveLink href={"/"}>
            {tema === "" ? (
              <Image
                src={Logo}
                alt="Logo do site"
                height={38}
                placeholder={`empty`}
              />
            ) : (
              <Image
                src={LogoDark}
                alt="Logo do site"
                height={38}
                placeholder={`empty`}
              />
            )}
          </ActiveLink>
        </div>
        <div className={`flex flex-col md:ml-6 md:flex-row`}>
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
      </nav>
    </header>
  );
}
