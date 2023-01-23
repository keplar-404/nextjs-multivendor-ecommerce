import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Header from "../components/header/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}
