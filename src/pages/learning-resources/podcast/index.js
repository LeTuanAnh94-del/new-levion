import Image from "next/image";
import HeadBody from "../../../components/headBody";
import { IconPlay, IconSpotify, IconThreeDots } from "../../../constant/icons";
import ButtonBase from "../../../components/buttonBase";
import { LIST_PODCAST, LIST_POPULAR } from "../../../constant/podcast";
import { SearchInput } from "../../../components/searchInput";

export default function Podcast() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeadBody
        title="True Stories"
        desc="Lorem ipsum dolor sit abet, consectetur advising edit. Nets risus non venerates dolor nils tellus habitant aliquot. Dignissim tellus, eu eu sed malesuada pareira aliquot eu.Dignissim tellus, Tellus element enid fucus morbid enid fuse:"
        logo={"/img/logo-podcast.png"}
      />
      <div className="py-12 px-4 flex flex-col gap-6">
        {LIST_PODCAST.map((podcast) => (
          <CardPodcast key={podcast} podcast={podcast} />
        ))}
      </div>
      <div className="flex flex-col gap-6 px-4">
        <SearchInput />
        <div className="flex flex-col gap-4 border-b border-solid border-neutral-grey-lightest pb-6">
          <p className="text-neutral-dark-grey text-xl font-bold">
            Popular Posts
          </p>
          <div className="flex gap-3 flex-col">
            {LIST_POPULAR.map((popular) => (
              <CardPopular key={popular} data={popular} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const CardPodcast = ({ podcast }) => (
  <div className="flex px-4 py-2 flex-col gap-y-2 rounded border border-solid border-neutral-grey-lighter">
    <div className="flex justify-end">
      <IconSpotify />
    </div>
    <div className="flex items-center gap-2">
      <Image
        src={podcast.imagePreview}
        alt="podcast-preview"
        width={80}
        height={80}
        className="cursor-pointer"
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col cursor-pointer">
          <p className="text-neutral-dark-grey text-sm font-black">
            {podcast.title}
          </p>
          <p className="text-neutral-dark-grey text-xs">{podcast.desc}</p>
        </div>
        <div>
          <ButtonBase
            variant="outline"
            title="Following"
            sizeButton="xs"
            className="text-sm font-bold"
          />
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 justify-end">
      <div className="cursor-pointer">
        <IconThreeDots />
      </div>
      <div className="cursor-pointer">
        <IconPlay />
      </div>
    </div>
  </div>
);

export const CardPopular = ({ data }) => (
  <div className="flex items-center gap-2">
    <Image src={data.imagePreview} alt={data.alt} width={80} height={80} />
    <div className="flex flex-col gap-1">
      <p className="text-neutral-dark-grey text-sm font-bold">{data.title}</p>
      <p className="text-neutral-grey-lighter text-sm">
        by {data?.author} / {data.dateRelease}
      </p>
    </div>
  </div>
);
