import Image from "next/image";

import ButtonBase from "../buttonBase";
import { Questions } from "../../constant/levelTest";

export default function Record({
  numCorrectAnswers,
  handleBackStep,
  handleNextStep,
}) {
  const level =
    numCorrectAnswers < (1 / 2) * Questions.length
      ? "Begin Level"
      : "Advance Level";

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
                Your score is {numCorrectAnswers} out of {Questions.length}
              </p>
              <p className="text-neutral-grey text-sm font-bold text-center lg:text-xl">
                Your score means you might be ready to prepare for one of our
                qualifications called{" "}
                <span className="text-orange">{level}</span>
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
              onClick={handleNextStep}
            />
            <ButtonBase
              title="Try again"
              sizeButton="small"
              variant="outline"
              className="text-primary text-base font-bold"
              sizeResponsive="none"
              onClick={handleBackStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
