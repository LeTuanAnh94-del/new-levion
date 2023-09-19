import { Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";

export default function SwiperImage({ children, slidesPerView, space }) {
  const [windowWith, setWindowWith] = useState(null);
  const [slidesPreview, setSlidesPreview] = useState();
  const [spaceBetween, setSpaceBetween] = useState();

  const handleResize = () => {
    const newWindow = window.innerWidth;

    setWindowWith(window.innerWidth);

    if (newWindow > 1024) {
      slidesPerView ? setSlidesPreview(slidesPerView) : setSlidesPreview(3);
      space ? setSpaceBetween(space) : setSpaceBetween(40);
    } else {
      setSlidesPreview(1.5);
      setSpaceBetween(16);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWith(window.innerWidth);

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  if (windowWith === null) {
    return null;
  }

  return (
    <div style={{ width: `${innerWidth - 17}px` }} className="h-full lg:px-16">
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPreview}
        style={{
          paddingTop: "24px",
          paddingBottom: "24px",
          paddingLeft: "15px",
          paddingRight: "16px",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={pagination}
      >
        {children}
      </Swiper>
    </div>
  );
}
