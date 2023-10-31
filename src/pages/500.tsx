import LayoutPublic from "@/components/home/LayoutPublic";
import Link from "next/link";

export default function Custom500() {
  return (
    <LayoutPublic>
      <div
        className={`flex flex-col bg-lime-100 h-screen dark:bg-gray-800
        dark:text-gray-200 w-full pt-4`}
      >
        <div
          className={`flex flex-col w-11/12 mx-auto justify-center items-center`}
        >
          <h1 className={`text-2xl font-bold`}>
            500 - Ocorreu erro no Servidor!
          </h1>

          <Link
            href={"/"}
            className={`border-2 p-4 bg-lime-500 rounded-xl my-4 text-xl font-bold`}
          >
            VOLTAR
          </Link>
        </div>
      </div>
    </LayoutPublic>
  );
}
