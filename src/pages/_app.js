import "swiper/css";

import "../styles/globals.css";
import "../styles/swiper.css";

import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full h-full flex flex-col items-center bg-cultured">
      <Header />
      <Image
        src={"/img/decor-1.png"}
        alt="decor"
        width={1000}
        height={805}
        className="hidden lg:block absolute left-0 "
      />
      <Image
        src={"/img/decor-2.png"}
        alt="decor"
        width={1000}
        height={805}
        className="hidden lg:block absolute right-0"
      />
      <div className="flex flex-col items-center max-w-screen-2xl">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
