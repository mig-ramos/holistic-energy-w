interface AuthInputProps {
  label: string;
  valor: any;
  obrigatorio?: boolean;
  naoRenderizarQuando?: boolean;
  tipo?: "text" | "email" | "password";
  valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.naoRenderizarQuando ? null : (
    <div className={`flex flex-col mt-4`}>
      <label htmlFor="" className="dark:text-gray-300">
        {props.label}
      </label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className={`
            px-4 py-3 rounded-lg bg-lime-100 dark:bg-lime-900 mt-2
            border focus:border-lime-600 dark:border-lime-700 focus:bg-white dark:focus:bg-gray-700 dark:focus:text-gray-100 dark:focus:border-lime-500
            focus:outline-none dark:text-gray-100 dark:focus:outline-none
            `}
      />
    </div>
  );
}
