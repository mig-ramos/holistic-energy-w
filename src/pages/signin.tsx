import { useState, useContext } from "react";
import LayoutPublic from "../components/home/LayoutPublic";
import AuthInput from "@/components/auth/AuthInput";
import Image from "next/image";
import figura from "public/images/terapia-floral.png";
import imgLoading from "public/loading.gif";
import { toast } from "react-toastify";

import { AuthContext } from "@/data/contexts/AuthContext";
import { canSSRGuest } from "@/utils/canRGuest";
import router from "next/router";
import Head from "next/head";
import { Header } from "../components/home/Header";

export default function Auth() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn, isAuthenticated } = useContext(AuthContext);

  function redirectPage() {
    router.push("/");
  }

  function clearForm() {
    setEmail("");
    setPassword("");
  }

  async function submeter() {
    if (modo === "login") {
      if (email === "" || password === "") {
        toast.warning("PREENCHA OS DADOS...");
        return;
      }
      setLoading(true);

      let data = {
        email,
        password,
      };

      await signIn(data);
      // clearForm();
      setLoading(false);
    } else {
      console.log("cadastrar");
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      
      <Header />
      <div className={`flex-col m-10 w-full md:w-1/2 lg:w-1/3 mx-auto`}>      
        <h1 className={`text-3xl font-bold mb-5`}>
          {modo === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>
        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={password}
          valorMudou={setPassword}
          obrigatorio
        />
        <AuthInput
          label="Confirmação de Senha"
          tipo="password"
          valor={password}
          valorMudou={setPassword}
          obrigatorio
          naoRenderizarQuando={true}
        />
        <button
          onClick={submeter}
          disabled={loading}
          className={`
          flex justify-center
      w-full bg-lime-600 hover:bg-lime-500
      text-white rounded-lg px-4 py-3 mt-6
      `}
        >
          <Image
            src={imgLoading}
            alt="Loading"
            hidden={!loading}
            width={24}
            className="mr-2"
          />
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
