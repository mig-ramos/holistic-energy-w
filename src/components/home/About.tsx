import Image from "next/image";
import mim from '../../../public/images/mim.png'

export function About() {
  return (
    <section className={`flex w-11/12 mx-auto justify-center bg-green-50`}>
      <div className={`w-2/3  text-start  p-4`}>
        <h2 className={`text-gray-600 text-xl`}>Sobre mim</h2>
        <h1 className={`font-bold text-3xl`}>Terapeuta da Silva</h1>
        <div className={`mt-4 text-xl text-gray-700`}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </div>
      </div>
      <div className={`flex justify-center items-center w-1/3  p-4`}>
        <Image src={mim} height={180} alt="Foto sobre mim" />
      </div>
    </section>
  );
}
