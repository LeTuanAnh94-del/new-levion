import "../styles/globals.css";
import Header from "../components/layouts/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="bg-cultured min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
}
