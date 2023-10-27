interface ConteudoProps {
  children?: any;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
         flex flex-col bg-gray-100 dark:bg-gray-800
         max-w-6xl mx-auto dark:text-gray-200
      `}
    >
      {props.children}
    </div>
  );
}