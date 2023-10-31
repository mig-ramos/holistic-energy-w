import Image from "next/image";
import florais from "../../../public/images/terapia-floral.png";
import reiki from "../../../public/images/reiki.png";
import acupuntura from "../../../public/images/acupuntura.png";

export function Terapies() {
  return (
    <section
      className={`dark:bg-gray-800 dark:text-gray-200 w-full bg-lime-100 pt-4`}
    >
      <div className={`flex-col w-11/12 mx-auto justify-center`}>
        <h2 className={`font-bold text-3xl p-4 border-s-8 border-green-500`}>
          Terapias
        </h2>
        <div className={`flex flex-col md:flex-row items-center justify-center`}>
          <div className={`w-full md:w-1/2  text-start  p-4`}>
            <h3 className={`font-bold text-2xl mb-2`}>Florais</h3>
            <Image src={florais} alt="" height={180} />
            <div className={`mt-4 text-xl text-gray-700`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
          <div className={`w-full md:w-1/2  text-start  p-4`}>
            <h2 className={`font-bold text-2xl mb-2`}>Reiki</h2>
            <Image src={reiki} alt="" height={180} />
            <div className={`mt-4 text-xl text-gray-700`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
          <div className={`w-full md:w-1/2  text-start  p-4`}>
            <h2 className={`font-bold text-2xl mb-2`}>Acupuntura</h2>
            <Image src={acupuntura} alt="" height={180} />
            <div className={`mt-4 text-xl text-gray-700`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
