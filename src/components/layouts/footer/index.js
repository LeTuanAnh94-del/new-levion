import Image from "next/image";
import Link from "next/link";

import { IconMenuFooter, MenuFooter } from "../../../constant/menuFooter";

export default function Footer() {
  return (
    <div className="relative z-10 bg-neutral-dark-grey bg-no-repeat bg-cover w-full px-4">
      <div className="flex flex-col py-12 gap-6 items-center">
        <div className="text-white">
          <Image
            src={"/img/logo-white.png"}
            alt="logo-white"
            width={64}
            height={64}
            className="lg:w-20 lg:h-20"
          />
        </div>
        <div className="flex flex-wrap gap-y-4 gap-x-6 justify-center">
          {MenuFooter.map((link) => (
            <Link
              key={link}
              href={link.link}
              className="text-neutral-grey-lighter text-base font-bold lg:text-xl hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-6">
          {IconMenuFooter.map((icon) => (
            <Image
              key={icon}
              src={icon.url}
              alt={icon.alt}
              width={32}
              height={32}
              className="lg:w-10 lg:h-10"
            />
          ))}
        </div>
        <p className="text-white text-base">
          ©2022 <b>Levion</b>. All copyrights reserved
        </p>
      </div>
    </div>
  );
}
