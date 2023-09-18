import Image from "next/image";
import ButtonBase from "../buttonBase";

export default function WelcomeLevelTest({ handelNextStep }) {
  return (
    <div className="mt-10 mb-16 px-4 rounded-lg w-full lg:mt-16 lg:mb-40 lg:px-67.5">
      <div className="py-6 flex flex-col items-center rounded-lg bg-neutral-grey-lightest px-4 gap-6 lg:px-25 lg:py-10 lg:gap-10">
        <div className="flex flex-col items-center gap-6">
          <Image
            src={"/img/logo-welcome.png"}
            alt="logo-welcome"
            width={137}
            height={160}
            className="lg:w-[240px] lg:h-[280px]"
          />
          <div className="flex flex-col items-center gap-1">
            <p className="text-primary text-2xl font-bold text-center lg:text-3.5xl">
              Welcome to your free Vietnamese level test
            </p>
            <p className="text-neutral-grey text-sm text-center lg:text-xl">
              How well do you know Vietnamese? We suggest you complete the
              following test to self-assess your level in Vietnamese, to pick
              the right Vietnamese course for you, or just to pass the time.
            </p>
          </div>
        </div>
        <ButtonBase
          title="Start the Test"
          sizeButton="base"
          variant="filled"
          className="text-white text-lg font-bold"
          sizeResponsive="none"
          onClick={handelNextStep}
        />
      </div>
    </div>
  );
}
