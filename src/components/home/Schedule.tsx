import Image from "next/image";
import schedule from "../../../public/images/schedule.png";

export function Schedule() {
  return (
    <section
      className={`
    flex flex-col bg-white dark:bg-gray-800
     w-full py-6
 `}
    >
      <div
        className={`w-11/12 mx-auto justify-center text-gray-600 dark:text-gray-300 text-2xl`}
      >
        <div className={`flex flex-col md:flex-row`}>
          <div
            className={`w-full md:w-1/2 lg:w-2/3 text-start border-s-8 border-green-500   p-4`}
          >
            <p>Manifestou algum interesse em alguma Terapia,</p>
            <p>entre em contato,</p>
            <p>faça seu cadastro aqui e</p>
            <p>veja os horários disponiveis!</p>
          </div>
          <div
            className={`w-full md:w-1/2 lg:w-1/3 flex justify-center items-center p-4`}
          >
            <button
              className={`border-orange-700 dark:border-orange-300 dark:bg-orange-700 bg-orange-200 border-2 hover:bg-orange-500 dark:hover:bg-orange-800  rounded-xl p-4 w-full flex items-center justify-center text-gray-800
              dark:hover:text-gray-100 dark:text-gray-900`}
              onClick={() => alert("Agendar")}
            >
              <Image src={schedule} width={48} alt="Agendamento" />
              <span className="ml-6">Veja horários disponíveis</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
