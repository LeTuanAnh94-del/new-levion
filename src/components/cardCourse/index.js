import Image from "next/image";
import Tags from "../tags";
import ButtonBase from "../buttonBase";

export default function CardCourse({ course }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded bg-white shadow-1.5sm pb-6">
      <Image
        src={course?.imagePreview}
        alt="image-preview-course"
        width={251}
        height={180}
        className="lg:w-[300px] lg:h-[180px]"
      />
      <div className="px-4 flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <Tags title={course?.level} />
            <Tags title={course?.skill} />
          </div>
          <p className="text-neutral-grey text-base font-bold">
            {course?.nameCourse}
          </p>
          <p className="text-neutral-grey text-2xl font-bold lg:text-3.5xl">
            ${course?.priceCourse}.00
          </p>
        </div>
        <div className="flex gap-2">
          <ButtonBase
            title="Add To Cart"
            sizeButton="small"
            variant="filled"
            className="text-white text-base font-bold"
            sizeResponsive="none"
          />
          <Image
            src={"/icons/icon-heart.png"}
            alt="icon-heart"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
