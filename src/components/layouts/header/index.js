import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  ArrowIcon,
  CartIcon,
  LogoIcon,
  MenuCloseIcon,
  MenuOpenIcon,
} from "../../../constant/icons";
import ButtonBase from "../../buttonBase";
import { LINK_NAVBAR } from "../../../constant/navbar";
import Menu from "../../menu";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="shadow-2.5xl z-10 relative">
      <div className="flex px-4 py-6 justify-between items-center lg:px-20">
        <Link href={"/"}>
          <div className="flex lg:hidden">
            <LogoIcon />
          </div>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={156}
            height={44}
            className="hidden lg:flex"
          />
        </Link>
        <div className="hidden lg:flex gap-6">
          {LINK_NAVBAR.map((link) => (
            <div key={link} className="flex py-3 items-center">
              <Link
                href={link.link}
                className="text-neutral-grey-light text-base font-bold"
              >
                {link.name}
              </Link>
              {link.name === "Learning Resources" && <ArrowIcon />}
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"/"}>
            <CartIcon />
          </Link>
          <div onClick={handleOpenMenu} className="cursor-pointer lg:hidden">
            {isOpenMenu === false ? <MenuCloseIcon /> : <MenuOpenIcon />}
          </div>
          <ButtonBase
            title={"Sign In"}
            className={"text-primary text-base font-bold hidden lg:block"}
            variant="outline"
          />
          <ButtonBase
            title={"Sign Up"}
            className={"text-white text-base font-bold hidden lg:block"}
          />
        </div>
      </div>
      {isOpenMenu && <Menu />}
    </div>
  );
}
