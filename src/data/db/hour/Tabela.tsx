import Hour from "../hour/Hour";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface TabelaProps {
  hours: Hour[];
  hourSelecionada?: (hour: Hour) => void;
  hourExcluida?: (hour: Hour) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.hourExcluida || props.hourSelecionada;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className={`py-1 px-1`}>Código</th>
        <th className={`py-1 px-1`}>Hora</th>
        {exibirAcoes ? <th className={`px-1 text-center`}>Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.hours?.map((hour, i) => {
      return (
        <tr
          key={hour.id}
          className={`${i % 2 === 0 ? "bg-gray-200 dark:bg-gray-600" : "bg-gray-300 dark:bg-gray-700"}`}
        >
          <td className={`px-1`}>{hour.id}</td>
          <td className={`px-1`}>{hour.hour}</td>
          {exibirAcoes ? renderizarAcoes(hour) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(hour: Hour) {
    return (
      <td className={`px-1`}>
        <div className={`flex flex-col lg:flex-row justify-center items-center`}>
          {props.hourSelecionada ? (
            <button onClick={() => props.hourSelecionada?.(hour)} className={`
            p-2 m-1 rounded-lg bg-transparent hover:bg-white
            `}>
              <FiEdit color="lime" size={28} />
            </button>
          ) : (
            false
          )}
          {props.hourExcluida ? (
            <button onClick={() => props.hourExcluida?.(hour)} className={`
            p-2 m-1 rounded-lg bg-transparent hover:bg-white
            `}>
              <FiTrash2 color="red" size={28} />
            </button>
          ) : (
            false
          )}
        </div>
      </td>
    );
  }

  return (
    <div className={`bg-green-100 rounded-xl my-1`}>
      <table className={`w-full my-1 mx-auto`}>
        <thead className={`bg-green-600 dark:bg-green-800 dark:text-white text-black text-left`}>{renderizarCabecalho()}</thead>
        <tbody>{renderizarDados()}</tbody>
      </table>
    </div>
  );
}
