import "../styles/globals.css";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex flex-col justify-between max-w-screen-2xl bg-cultured h-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
