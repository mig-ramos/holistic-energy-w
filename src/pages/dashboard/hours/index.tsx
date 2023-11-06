import { canSSRAuth } from "@/utils/canSSAuth";
import Layout from "@/components/template/Layout";
import Head from "next/head";
import { useContext } from "react";
import { AuthContext } from "../../../data/contexts/AuthContext";
import useHours from "../../../data/hooks/useHours";
import Botao from "../../../components/ui/Botao";
import Tabela from "../../../data/db/hour/Tabela";
import Formulario from "../../../data/db/hour/Formulario";

export default function Hours() {
  const { isAuthenticated, user } = useContext(AuthContext);

  const {
    hour,
    hours,
    novaHour,
    selecionarHour,
    salvarHour,
    excluirHour,
    tabelaVisivel,
    exibirTabela,
  } = useHours();

  return (
    <div>
      <Head>
        <title>Horários</title>
      </Head>
      {isAuthenticated && user.role === "ADMIN" && (
        <div>
          <Layout titulo="Horários" subtitulo="Controle de horários">
            <div
              className={`flex flex-col bg-gray-100 dark:bg-gray-800
        dark:text-gray-200 w-full`}
            >
              {tabelaVisivel ? (
                <>
                  <div className={`px-2`}>
                    <Botao cor="green" onClick={novaHour}>
                      Novo Horário
                    </Botao>

                    <Tabela
                      hours={hours}
                      hourSelecionada={selecionarHour}
                      hourExcluida={excluirHour}
                    />
                  </div>
                </>
              ) : (
                <div className={`px-2 md:w-8/12 lg:w-7/12 xl:w-6/12 max-w-xl`}>
                  <Formulario
                    hour={hour}
                    hourMudou={salvarHour}
                    cancelado={exibirTabela}
                  />
                </div>
              )}
            </div>
          </Layout>
        </div>
      )}
      {isAuthenticated && user.role === "THERAPIST" && (
        <div>
          <Layout
            titulo={"Painel do Terapeuta: " + user.role}
            subtitulo={"Olá " + user.name}
          ></Layout>
        </div>
      )}
      {isAuthenticated && user.role === "CLIENT" && (
        <div>
          <Layout titulo="Seu Painel" subtitulo={"Olá " + user.name}></Layout>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
