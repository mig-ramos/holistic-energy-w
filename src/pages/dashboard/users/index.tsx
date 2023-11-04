import { canSSRAuth } from "@/utils/canSSAuth";
import Layout from "@/components/template/Layout";
import Head from "next/head";

export default function Users() {
  return (
    <Layout titulo="Usários" subtitulo="Controle de usuários">
      <Head>
        <title>Usários</title>
      </Head>
      <div
        className={`flex flex-col bg-gray-100 dark:bg-gray-800
    dark:text-gray-200 w-full`}
      >
        <div className={`mx-2`}>
          <h1>Usários</h1>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});