import { AuthContext } from "@/data/contexts/AuthContext";
import { useContext } from "react";
import { ActiveLink } from "../ActiveLink";

export default function MenuLateral() {
  const { signOut } = useContext(AuthContext);

  let linkActive = "text-orange-500";
  return (
    <aside className={`flex flex-col justify-center h-screen my-auto bg-lime-50 dark:bg-gray-900 dark:text-gray-200`}>
      <ul>
        <li className={`mt-2`}>
          <ActiveLink href="/dashboard/schedule" activeClassName={linkActive}>
            <span>Agenda</span>
          </ActiveLink>
        </li>
        <li className={`mt-2`}>
        <ActiveLink href="/dashboard/therapies" activeClassName={linkActive}>
            <span>Terapias</span>
          </ActiveLink>
        </li>
        <li className={`mt-2`}>
        <ActiveLink href="/dashboard/therapists" activeClassName={linkActive}>
            <span>Terapeutas</span>
          </ActiveLink>
        </li>
        <li className={`mt-2`}>
        <ActiveLink href="/dashboard/hours" activeClassName={linkActive}>
            <span>Horários</span>
          </ActiveLink>
        </li>
        <li className={`mt-2`}>
        <ActiveLink href="/dashboard/users" activeClassName={linkActive}>
            <span>Usuários</span>
          </ActiveLink>
        </li>
        <li className={`mt-2`}>
        <ActiveLink href="/dashboard/profile" activeClassName={linkActive}>
            <span>Perfil</span>
          </ActiveLink>
        </li>
      </ul>
      <button className={`hover:text-black hover:text-bold text-center border-orange-300 bg-orange-200 border-2 hover:bg-orange-300 rounded-lg  flex items-center justify-center dark:text-white dark:bg-orange-900 dark:hover:bg-orange-700 dark:hover:border-orange-700 dark:border-orange-700 m-2 py-1
      `} onClick={signOut}>Sair</button>
    </aside>
  );
}
