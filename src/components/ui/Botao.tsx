interface BotaoProps {
    cor?: "green" | "blue" | "gray";
    children: any;
    onClick?: () => void
  }
  
  export default function Botao(props: BotaoProps) {
  
    if (props.cor === "green") {
      return <button onClick={props.onClick} className={`
      bg-green-600 dark:bg-green-900 text-black py-3 px-8 rounded-xl mt-0.5 mr-1 w-full md:w-44 dark:text-white
      hover:bg-green-500 dark:hover:bg-green-800 hover:text-black hover:font-bold
      `}>{props.children}</button>;
    }
  
    else if (props.cor === "blue") {
      return <button onClick={props.onClick} className={`
      bg-blue-500 dark:bg-blue-800 text-black dark:text-white py-3 px-8 rounded-xl mt-0.5 mr-1 w-full md:w-1/2
      hover:bg-blue-400 dark:hover:bg-blue-700 hover:text-black hover:font-bold
      `}>{props.children}</button>;
    }
  
    else {
    return <button onClick={props.onClick} className={`
    bg-gray-400 dark:bg-gray-600 text-black dark:text-white py-3 px-8 rounded-xl mt-0.5 mr-1 w-full md:w-1/2
      hover:bg-gray-300 dark:hover:bg-gray-500 hover:text-black hover:font-bold
    `}>{props.children}</button>;
    }
  }