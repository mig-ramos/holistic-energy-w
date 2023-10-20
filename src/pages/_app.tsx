import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Header } from "../components/home/Header";
import { Footer } from "../components/home/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ToastContainer autoClose={1500} />
      <Footer />
    </>
  );
}
