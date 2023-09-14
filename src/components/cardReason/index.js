import Image from "next/image";

export default function CardReason() {
  return (
    <div className="p-4 rounded-lg border-2 border-solid border-magnolia bg-white">
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
          <p className="text-neutral-dark-grey text-xl font-bold">
            Diverse courses of choice
          </p>
          <p className="text-neutral-grey-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sodales
            non interdum eget. Platea et quam magna tortor, dolor.
          </p>
        </div>
      </div>
    </div>
  );
}
