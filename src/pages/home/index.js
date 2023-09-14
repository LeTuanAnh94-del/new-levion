import Image from "next/image";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

import ButtonBase from "../../components/buttonBase";
import { MenuLearn, Offers, Reason, Reasons } from "../../constant/home";
import SwiperImage from "../../components/swiper";
import CardReason from "../../components/cardReason";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center gap-6 mt-12 mx-4">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <p className="text-neutral-dark-grey text-2xl font-bold">
            Vietnamese Journey with LEVION
          </p>
          <p className="text-neutral-grey-light text-sm">
            We are ready to help you crafting package branding for your products
            according to you target market. We helped more than 1000 product in
            United States
          </p>
        </div>
        <ButtonBase
          sizeButton="small"
          variant="filled"
          title="Sign up"
          className="text-white text-base font-bold"
        />
        <div className="relative w-full">
          <Image
            src={"/img/logo-home.png"}
            alt="image-home"
            width={142}
            height={142}
            className="absolute left-0 right-0 my-0 mx-auto top-[24px]"
          />
          <Image
            src={"/img/image-around-logo-2.png"}
            alt="image-around-home"
            width={95}
            height={70}
            className="absolute left-[15px] right-0 my-0 -top-[3px]"
          />
          <Image
            src={"/img/image-around-logo.png"}
            alt="image-around-home"
            width={58}
            height={54}
            className="absolute left-[53px] right-0 my-0 top-[109px]"
          />
          <Image
            src={"/img/image-around-logo-3.png"}
            alt="image-around-home"
            width={116}
            height={78}
            className="absolute right-[13px] my-0 -top-[50px]"
          />
          <Image
            src={"/img/image-around-logo-4.png"}
            alt="image-around-home"
            width={37}
            height={38}
            className="absolute right-[13px] my-0 top-[110px]"
          />
        </div>
      </div>
      <div className="relative mt-64 flex flex-col items-center mx-4 mb-12">
        <div className="flex flex-col items-center gap-4 mx-4">
          <p className="text-neutral-dark-grey text-2xl font-bold text-center">
            Learn Vietnamese - one of the world’s most interesting and popular
            languages
          </p>
          <p className="text-neutral-grey text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit
            sollicitudin eros nisl. Blandit neque accumsan lectus id consectetur
            amet proin. Enim eros habitant euismod porta. Sodales sed cras at
            aliquam commodo mattis pretium.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-around">
          {MenuLearn.map((menu) => (
            <div key={menu} className="flex flex-col items-center gap-2">
              <Image src={menu.url} alt="menu-learn" width={109} height={109} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full mb-12">
        <p className="text-neutral-dark-grey text-center text-2xl font-bold mx-4">
          Why learning Vietnamese with Levion?
        </p>
        <SwiperImage>
          <CardReason />
        </SwiperImage>
        <Image
          src={"/img/logo-why-learn.png"}
          alt="logo-why-learn"
          width={343}
          height={304}
        />
      </div>
      <div className="flex px-6 py-8 flex-col justify-center items-center gap-14 rounded-4xl bg-russian-violet">
        <p className="text-white text-2xl font-bold">What we offer?</p>
        <div className="flex flex-wrap gap-3">
          {Offers.map((offer) => (
            <div
              key={offer}
              className="flex px-6 py-8 flex-col justify-center gap-6 items-center"
            >
              <div className="p-6 gap-6 rounded-2xl bg-white">
                <Image/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
