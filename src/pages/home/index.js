import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import ButtonBase from "../../components/buttonBase";
import { MenuLearn, Offers, Reasons, Reviews } from "../../constant/home";
import SwiperImage from "../../components/swiper";
import CardReason from "../../components/cardReason";
import CardReview from "../../components/cardReview";
import BaseInput from "../../components/inputBase";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center gap-6 mt-12 mx-4 lg:gap-20 lg:mt-20">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <p className="text-neutral-dark-grey text-2xl font-bold lg:text-5xl">
            Vietnamese Journey with LEVION
          </p>
          <p className="text-neutral-grey-light text-sm lg:text-xl ">
            We are ready to help you crafting package branding for your products
            according to you target market. We helped more than 1000 product in
            United States
          </p>
        </div>
        <ButtonBase
          sizeButton="small"
          variant="filled"
          title="Sign up"
          className="text-white text-base font-bold lg:text-lg"
        />
        <Image
          src={"/img/background-home.png"}
          alt="background-home"
          width={400}
          height={200}
          className="w-full h-auto px-4 -mt-28 lg:w-[1006px]"
        />
      </div>
      <div className="relative mt-12 flex flex-col items-center mx-4 mb-12 lg:mt-40 lg:gap-10 lg:mx-10 lg:mb-20">
        <div className="flex flex-col items-center gap-4 mx-4">
          <p className="text-neutral-dark-grey text-2xl font-bold text-center lg:text-4.5xl">
            Learn Vietnamese - one of the world’s most interesting and popular
            languages
          </p>
          <p className="text-neutral-grey text-center text-sm lg:text-neutral-grey lg:text-xl">
            sollicitudin eros nisl. Blandit neque accumsan lectus id consectetur
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit
            amet proin. Enim eros habitant euismod porta. Sodales sed cras at
            aliquam commodo mattis pretium.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-around lg:gap-5.5 lg:w-full">
          {MenuLearn.map((menu) => (
            <div key={menu} className="flex flex-col items-center gap-2">
              <Image
                src={menu.url}
                alt="menu-learn"
                width={109}
                height={109}
                className="lg:w-[195px] lg:h-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full mb-12 lg:flex-col lg:justify-start lg:px-20 lg:gap-10 lg:mb-40">
        <p className="text-neutral-dark-grey text-center text-2xl font-bold mx-4 lg:text-4.5xl lg:text-end lg:w-full">
          Why learning Vietnamese with Levion?
        </p>
        <div className="flex flex-col items-center lg:w-full lg:gap-10 lg:flex-row-reverse">
          <div className="lg:hidden">
            <SwiperImage>
              {Reasons.map((reason) => (
                <SwiperSlide key={reason}>
                  <CardReason dataReason={reason} />
                </SwiperSlide>
              ))}
            </SwiperImage>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {Reasons.map((reason) => (
              <CardReason key={reason} dataReason={reason} />
            ))}
          </div>
          <Image
            src={"/img/logo-why-learn.png"}
            alt="logo-why-learn"
            width={343}
            height={304}
            className="lg:w-[421px] lg:h-[374px]"
          />
        </div>
      </div>
      <div className="flex px-6 py-8 flex-col justify-center items-center gap-14 rounded-4xl bg-russian-violet mb-12 mx-4 lg:flex-row lg:mx-20 lg:justify-between lg:px-12 lg:pb-12 lg:pt-0 lg:mb-40">
        <p className="text-white text-4.5xl font-bold">What we offer?</p>
        <div className="flex gap-3 flex-wrap justify-center lg:grid grid-cols-4 lg:gap-x-6">
          {Offers.map((offer) => (
            <div
              key={offer}
              className="flex px-6 py-8 flex-col justify-center gap-6 items-center w-[242px] lg:py-14 lg:w-fit lg:items-start"
            >
              <div className="p-6 gap-6 rounded-2xl bg-white">
                <Image src={offer.url} alt="offer" width={56} height={56} />
              </div>
              <p className="text-white text-base font-bold text-center lg:text-start">
                {offer.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center lg:gap-10">
        <p className="text-neutral-dark-grey text-center text-2xl font-bold lg:text-4.5xl">
          What our learners say?
        </p>
        <SwiperImage>
          {Reviews.map((review) => (
            <SwiperSlide key={review}>
              <CardReview dataReviews={review} />
            </SwiperSlide>
          ))}
        </SwiperImage>
      </div>
      <div className="flex flex-col justify-center items-center gap-12 mx-4 mt-10 lg:flex-row-reverse lg:mx-20 lg:gap-20 lg:mt-40">
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-neutral-dark-grey text-xl font-bold lg:text-4.5xl">
              Be a part of our Vietnamese-speaking community
            </p>
            <p className="text-neutral-grey text-sm lg:text-xl lg:text-neutral-grey">
              Join Vietnamese learners from around the world to become fluent
              and confident in the community we are building!
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
            <ButtonBase
              variant="filled"
              sizeButton="small"
              title={
                <div className="flex gap-1">
                  <Image
                    src={"/icons/icon-facebook.png"}
                    alt="icon-facebook"
                    width={24}
                    height={24}
                  />
                  <p className="text-white text-base font-bold">
                    Join us on Facebook
                  </p>
                </div>
              }
              className="w-max"
            />
            <ButtonBase
              variant="filled"
              sizeButton="small"
              title={
                <div className="flex gap-1">
                  <Image
                    src={"/icons/icon-discord.png"}
                    alt="icon-facebook"
                    width={24}
                    height={24}
                  />
                  <p className="text-white text-base font-bold">
                    Join us on Discord
                  </p>
                </div>
              }
              className="w-max"
            />
          </div>
        </div>
        <Image
          src={"/img/logo-invite.png"}
          alt="logo-invite"
          width={346}
          height={240}
          className="lg:w-[514px] lg:h-[356px]"
        />
      </div>
      <div className="bg-[url('/img/background-join.png')] bg-cover bg-no-repeat mt-12 mb-40 mx-4">
        <div className="mx-4 my-20 mb-10">
          <div>
            <p className="text-yellow text-2xl font-bold mb-1 text-center">
              Join our Newsletter
            </p>
            <p className="text-white text-base text-center">
              Get a notification from us on any updates and tips for your
              learning progress.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <BaseInput />
        </div>
      </div>
    </div>
  );
}
