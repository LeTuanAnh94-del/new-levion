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
import { LINK_NAVBAR, MENU_LEARNING_RESOURCES } from "../../../constant/navbar";
import Menu from "../../menu";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMenuLearningResource, setIsOpenMenuLearningResource] =
    useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleOpenMenuLearningResource = () => {
    setIsOpenMenuLearningResource(!isOpenMenuLearningResource);
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
              {link.name === "Learning Resources" && (
                <div
                  className=" relative"
                  onClick={handleOpenMenuLearningResource}
                >
                  <div
                    className={`-rotate-90 cursor-pointer ${
                      isOpenMenuLearningResource && "rotate-0"
                    }`}
                  >
                    <ArrowIcon />
                  </div>
                  {isOpenMenuLearningResource && (
                    <div className="absolute flex flex-col p-4 rounded bg-white shadow-1.5sm w-max">
                      {MENU_LEARNING_RESOURCES.map((menu) => (
                        <div key={menu} className="py-3">
                          <Link
                            href={menu.link}
                            className="text-neutral-grey-light text-base font-bold"
                          >
                            {menu.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
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
