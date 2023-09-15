import "swiper/css";

import "../styles/globals.css";
import "../styles/swiper.css";

import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full h-full flex flex-col items-center bg-cultured">
      <Header />
      <div className="flex flex-col items-center max-w-screen-2xl">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
