import { canSSRAuth } from "@/utils/canSSAuth";
import { AuthContext } from "@/data/contexts/AuthContext";

import { useContext } from "react";

import Head from "next/head";

import Layout from "@/components/template/Layout";

export default function Dashboard() {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <div>
      <Head>
        <title>Painel de Controle</title>
      </Head>
      {isAuthenticated && user.role === "ADMIN" && (
        <div>
          <Layout
            titulo={"Painel Administrativo: " + user.role}
            subtitulo={"Olá " + user.name}
          ></Layout>
        </div>
      )}
      {isAuthenticated && user.role === "THERAPIST" && (
        <div>
          <Layout
            titulo={"Painel do Terapeuta - função: " + user.role}
            subtitulo={"Olá " + user.name}
          ></Layout>
        </div>
      )}
      {isAuthenticated && user.role === "CLIENT" && (
        <div>
          <Layout titulo="Meu Painel" subtitulo={"Olá " + user.name}></Layout>
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
