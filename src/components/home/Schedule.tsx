import Image from "next/image";
import schedule from "../../../public/images/schedule.png";

export function Schedule() {
  return (
    <section
      className={`
    flex flex-col bg-white dark:bg-gray-800
    dark:text-gray-200 w-full py-4
 `}
    >
      <div
        className={`w-11/12 mx-auto justify-center`}
      >
        <div className={`flex`}>
          <div className={`w-2/3 text-start border-s-8 border-green-500   p-4`}>
            <p className={`text-gray-600 text-2xl`}>
                Manifestou algum interesse em alguma Terapia,
            </p>
            <p className={`text-gray-600 text-2xl`}>
                entre em contato,
            </p>
            <p className={`text-gray-600 text-2xl`}>
                faça seu cadastro aqui e
            </p>
            <p className={`text-gray-600 text-2xl`}>
                veja os horários disponiveis!
            </p>
          </div> 
          <div className={`w-1/3 flex justify-center items-center p-4`}>
          <button className={`border-orange-700 bg-orange-200 border-2 hover:bg-orange-100 rounded-full p-4 w-full flex items-center justify-center`} onClick={() => alert('Agendar')}>
            <Image src={schedule} width={48} alt="Agendamento" />
            <span className="ml-6 text-xl">Veja horários disponíveis</span>
            </button> 
            </div>           
               
          </div>
        </div> 
    </section>
  );
}
