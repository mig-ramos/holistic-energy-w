import {
  IconeLogo,
  IconeAjustes,
  IconeCasa,
  IconeSino,
  IconeSair,
} from "../icons";
import MenuItem from "./MenuItem";
import { AuthContext } from "@/data/contexts/AuthContext";
import { useContext } from "react";

export default function MenuLateral() {
  const { signOut } = useContext(AuthContext);
  return (
    <aside
      className={`flex flex-col
    dark:bg-gray-900 dark:text-gray-200
    `}
    >
      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeSair}
          onClick={signOut}
          className={`
               text-red-600 dark:text-red-400
               hover:bg-red-400 hover:text-white
               dark:hover:text-white
               `}
        />
      </ul>
      <ul className={`flex-col`}>
        <MenuItem url="/" texto="Home" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
    </aside>
  );
}
