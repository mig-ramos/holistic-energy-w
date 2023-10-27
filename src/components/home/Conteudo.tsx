interface ConteudoProps {
  children?: any;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
         flex flex-col bg-white dark:bg-gray-800
         dark:text-gray-200 w-full
      `}
    >
      {props.children}
    </div>
  );
}
