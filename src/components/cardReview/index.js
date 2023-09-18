import Image from "next/image";
import { IconStar } from "../../constant/icons";

export default function CardReview({ dataReviews }) {
  return (
    <div
      key={dataReviews}
      className="flex p-4 flex-col gap-6 bg-white rounded-lg shadow-3.5xl lg:p-6"
    >
      <div className="flex flex-col gap-6 ">
        <div className="flex justify-between">
          <Image src={"/img/quotes.png"} alt="quotes" width={24} height={24} />
          <div className="flex gap-1">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
        </div>
        <div className="text-neutral-grey text-sm line-clamp-3 lg:text-xl lg:line-clamp-6">
          {dataReviews?.introduce}
        </div>
      </div>
      <div className="flex pt-4 items-center gap-4 border-t border-solid border-magnolia">
        <Image
          src={dataReviews?.avatarUrl}
          alt="avatar-user"
          width={64}
          height={64}
        />
        <div className="flex flex-col gap-1">
          <p className="text-neutral-dark-grey text-2xl font-bold">
            {dataReviews?.nameUser}
          </p>
          <p className="text-neutral-grey-light text-sm lg:text-base">
            {dataReviews?.level}
          </p>
        </div>
      </div>
    </div>
  );
}
