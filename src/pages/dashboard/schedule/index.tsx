import { canSSRAuth } from "@/utils/canSSAuth";
import Layout from "@/components/template/Layout";

export default function Schedule() {
  return (
    <Layout titulo="Agenda" subtitulo="Controle de agendamentos">
      <div
        className={`flex flex-col bg-gray-100 dark:bg-gray-800
    dark:text-gray-200 w-full`}
      >
        <div className={`mx-2`}>
          <h1>Agendamentos</h1>
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