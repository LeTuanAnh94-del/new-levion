import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import ButtonBase from "../buttonBase";
import SwiperImage from "../swiper";
import CardCourse from "../cardCourse";
import { Courses } from "../../constant/coures";

export default function Record() {
  return (
    <div className="mt-10 mb-16 flex flex-col gap-16 lg:mt-16 lg:mb-40 lg:gap-25">
      <div className="mx-4 flex flex-col lg:mx-20 lg:px-45">
        <div className="flex flex-col gap-10 px-4 py-6 bg-neutral-grey-lightest rounded-lg lg:px-40 lg:py-10">
          <div className="flex flex-col gap-6 items-center">
            <Image
              src={"/img/logo-record.png"}
              alt="logo-record"
              width={206}
              height={160}
              className="lg:w-[327px] lg:h-[254px]"
            />
            <div className="flex flex-col gap-1">
              <p className="text-primary text-2xl font-bold text-center lg:text-3.5xl">
                Your score is 28 out of 30
              </p>
              <p className="text-neutral-grey text-sm font-bold text-center lg:text-xl">
                Your score means you might be ready to prepare for one of our
                qualifications called{" "}
                <span className="text-orange">Advance Level</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:flex-row lg:justify-center">
            <ButtonBase
              title="View Results"
              sizeButton="small"
              variant="filled"
              className="text-white text-base font-bold"
              sizeResponsive="none"
            />
            <ButtonBase
              title="Try again"
              sizeButton="small"
              variant="outline"
              className="text-primary text-base font-bold"
              sizeResponsive="none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-neutral-dark-grey text-2xl font-bold text-center lg:text-3.5xl">
          Recommend Courses for Advanced Level
        </p>
        <div className="">
          <SwiperImage slidesPerView="4" spaceBetween="24">
            {Courses.map((course) => (
              <SwiperSlide key={course}>
                <CardCourse course={course} />
              </SwiperSlide>
            ))}
          </SwiperImage>
        </div>
      </div>
    </div>
  );
}
