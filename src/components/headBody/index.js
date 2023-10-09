import Image from "next/image";

export default function HeadBody({ title, desc, logo }) {
  return (
    <div className="bg-head-body flex flex-col gap-y-10 px-4 py-10 lg:flex-row lg:items-center lg:px-20 lg:py-5.5 lg:gap-x-6">
      <div className="flex flex-col gap-y-1">
        <p className="text-primary text-3.5xl font-bold lg:text-5xl">{title}</p>
        <p className="text-neutral-grey text-sm lg:text-xl">{desc}</p>
      </div>
      <Image
        src={logo}
        alt="logo-learning-course"
        width={343}
        height={250}
        className="lg:w-120.75 lg:h-75"
      />
    </div>
  );
}
