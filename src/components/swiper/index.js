import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

export default function SwiperImage({ children }) {
  const [windowWith, setWindowWith] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWith(window.innerWidth);

      const handleResize = () => {
        setWindowWith(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  if (windowWith === null) {
    return null;
  }

  return (
    <div style={{ width: `${innerWidth - 16}px` }}>
      <Swiper spaceBetween={16} slidesPerView={1.5}>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
      </Swiper>
    </div>
  );
}
