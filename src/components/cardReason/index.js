import Image from "next/image";

export default function CardReason({ dataReason }) {
  return (
    <div className="p-4 rounded-lg border-2 border-solid border-magnolia bg-white h-full lg:border-neutral-grey-lightest">
      <div className="flex flex-col gap-4">
        <div className="p-2 rounded bg-lavender w-fit">
          <Image
            src={"/img/logo-reward.png"}
            alt="logo-reward"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-neutral-dark-grey text-xl font-bold max-sm:line-clamp-1">
            {dataReason?.title}
          </p>
          <p className="text-neutral-grey-light text-sm lg:text-base">
            {dataReason?.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
