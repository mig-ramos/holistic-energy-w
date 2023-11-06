interface ConteudoProps {
    children?: any
  }

export default function Conteudo(props: ConteudoProps) {
    return (
      <div className={`
        flex flex-col mt-2
        dark:text-gray-200
      `}>
        {props.children}
      </div>
    );
  }