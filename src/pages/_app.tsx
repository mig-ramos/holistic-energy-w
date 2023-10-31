import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../data/contexts/AppContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "../data/contexts/AuthContext";
// import { Header } from "../components/home/Header";
// import { Footer } from "../components/home/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <AppProvider>
          <Component {...pageProps} />
          <ToastContainer autoClose={1500} />
        </AppProvider>
      </AuthProvider>
    </>
  );
}
