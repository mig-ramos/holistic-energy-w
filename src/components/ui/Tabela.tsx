import Therapy from "../../data/db/therapy/Therapy";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface TabelaProps {
  therapies: Therapy[];
  therapySelecionada?: (therapy: Therapy) => void;
  therapyExcluida?: (therapy: Therapy) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.therapyExcluida || props.therapySelecionada;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className={`py-1 px-4`}>Código</th>
        <th className={`py-1 px-4`}>Terapia</th>
        <th className={`py-1 px-4`}>Descrição</th>
        {exibirAcoes ? <th className={`px-1`}>Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.therapies?.map((therapy, i) => {
      return (
        <tr
          key={therapy.id}
          className={`${i % 2 === 0 ? "bg-gray-200 dark:bg-gray-600" : "bg-gray-300 dark:bg-gray-700"}`}
        >
          <td className={`pr-4 pl-1`}>{therapy.id}</td>
          <td className={`pr-4 pl-1`}>{therapy.name}</td>
          <td className={`pr-4 pl-1`}>{therapy.description}</td>
          {exibirAcoes ? renderizarAcoes(therapy) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(therapy: Therapy) {
    return (
      <td className={`px-1`}>
        <div className={`flex flex-col lg:flex-row justify-center items-center`}>
          {props.therapySelecionada ? (
            <button onClick={() => props.therapySelecionada?.(therapy)} className={`
            p-2 m-1 rounded-lg bg-transparent hover:bg-white
            `}>
              <FiEdit color="lime" size={28} />
            </button>
          ) : (
            false
          )}
          {props.therapyExcluida ? (
            <button onClick={() => props.therapyExcluida?.(therapy)} className={`
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
      <table className={`w-full my-1`}>
        <thead className={`bg-green-600 dark:bg-green-800 dark:text-white text-black text-left`}>{renderizarCabecalho()}</thead>
        <tbody>{renderizarDados()}</tbody>
      </table>
    </div>
  );
}
