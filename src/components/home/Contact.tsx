import Image from "next/image";
import mapa from "../../../public/images/mapa.png";
import iconMap from "../../../public/images/iconMap.png";
import email from "../../../public/images/email.png";
import schedule from "../../../public/images/schedule.png";
import instagram from "../../../public/images/instagram.png";
import youtube from "../../../public/images/youtube.png";

export function Contact() {
  return (
    <section
      className={`
    flex flex-col bg-lime-100 dark:bg-gray-600
    dark:text-gray-300 w-full py-6
 `}
    >
      <div
        className={`
    flex flex-col md:flex-row w-11/12 mx-auto justify-center
`}
      >
        <div className={`w-full md:w-1/2  text-start`}>
          <div className={`border-s-8 border-green-500   p-4`}>
            <h3 className={`text-gray-600 text-xl`}>Redes sociais</h3>
            <h2 className={`text-green-500 font-bold text-3xl`}>Onde fica!</h2>
          </div>

          <div className={`text-xl text-gray-700 dark:text-gray-300 p-4`}>
            <div className="flex items-center mt-2">
              <Image src={iconMap} width={32} alt="Mapa local" />
              <span className="ml-4">Av. Paulista, 000 - Bela Vista - SP</span>
            </div>
            <div className="flex items-center mt-2">
              <Image src={email} width={32} alt="Email" />
              <span className="ml-4">terapeuta@terapeura.com</span>
            </div>
            <div className="flex items-center mt-2">
              <Image src={schedule} width={32} alt="Agendamento" />
              <span className="ml-4">
                Atendimento: ver horários disponíveis
              </span>
            </div>
            <div className="flex items-center mt-6">
              <span className="flex items-center mr-6">
                Siga-me nas minhas redes sociais:{" "}
              </span>
              <Image
                src={instagram}
                width={28}
                alt="Instagram"
                className="mr-6"
              />
              <Image src={youtube} width={32} alt="Youtube" />
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center w-full md:w-1/2  p-4`}
        >
          <h2 className={`text-2xl font-semibold my-2`}>Local</h2>
          <Image
            src={mapa}
            height={240}
            alt="Mapa local"
            className="rounded-xl+"
          />
        </div>
      </div>
    </section>
  );
}
