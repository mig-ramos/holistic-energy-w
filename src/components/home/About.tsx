import Image from "next/image";
import mim from "../../../public/images/mim.png";

export function About() {
  return (
    <section
      className={`
    flex flex-col bg-white dark:bg-gray-800
    dark:text-gray-200 w-full py-6
 `}
    >
      <div
        className={`
    flex flex-col lg:w-11/12 md:flex-row mx-auto justify-center items-center
`}
      >
        <div className={`w-2/3  text-start`}>
          <div className={`border-s-8 border-green-500   p-4`}>
            <h3 className={`text-gray-600 dark:text-gray-300 text-xl`}>
              Sobre mim
            </h3>
            <h2 className={`text-green-500 font-bold text-3xl`}>Terapeuta da Silva</h2>
          </div>

          <div className={`text-xl text-gray-700 dark:text-gray-300 p-4`}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </div>
        </div>
        <div
          className={`flex justify-center items-center w-1/3 dark:bg-gray-400 dark:rounded-xl p-4`}
        >
          <Image src={mim} height={180} alt="Foto sobre mim" />
        </div>
      </div>
    </section>
  );
}
