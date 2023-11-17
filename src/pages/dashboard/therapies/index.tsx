import { canSSRAuth } from "@/utils/canSSAuth";
import Layout from "@/components/template/Layout";
import Head from "next/head";
import { useContext } from "react";
import { AuthContext } from "../../../data/contexts/AuthContext";
import useTherapies from "../../../data/hooks/useTherapies";
import Botao from "../../../components/ui/Botao";
import Tabela from "../../../components/ui/Tabela";
import Formulario from "../../../data/db/therapy/Formulario";

export default function Therapies() {
  const { isAuthenticated, user } = useContext(AuthContext);

  const config: ConfigTable = {
    columns: [
      {
        property: "id",
        name: "Código",
      },
      {
        property: "name",
        name: "Terapia",
      },
      {
        property: "description",
        name: "Descrição",
      },
    ],
  };

  const {
    therapy,
    therapies,
    novaTherapy,
    selecionarTherapy,
    salvarTherapy,
    excluirTherapy,
    tabelaVisivel,
    exibirTabela,
  } = useTherapies();

  return (
    <div>
      <Head>
        <title>Terapias</title>
      </Head>
      {isAuthenticated && user.role === "ADMIN" && (
        <div>
          <Layout titulo="Terapias" subtitulo="Controle de terapias">
            <div
              className={`flex flex-col bg-gray-100 dark:bg-gray-800
        dark:text-gray-200 w-full`}
            >
              {tabelaVisivel ? (
                <>
                  <div className={`px-2`}>
                    <Botao cor="green" onClick={novaTherapy}>
                      Nova Terapia
                    </Botao>

                    <Tabela
                      list={therapies}
                      config={config}
                      itemSelecionada={selecionarTherapy}
                      itemExcluida={excluirTherapy}
                    />
                  </div>
                </>
              ) : (
                <div className={`px-2 md:w-8/12 lg:w-7/12 xl:w-6/12 max-w-xl`}>
                  <Formulario
                    therapy={therapy}
                    therapyMudou={salvarTherapy}
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
