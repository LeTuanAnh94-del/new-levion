import Link from "next/link";

import { LINK_NAVBAR, MENU_LEARNING_RESOURCES } from "../../constant/navbar";
import ButtonBase from "../buttonBase";
import { ArrowIcon } from "../../constant/icons";
import { useState } from "react";

export default function Menu({ handleCloseMenu }) {
  const [isOpenMenuLearningResources, setIsOpenMenuLearningResources] =
    useState(false);

  const handelOpenMenuLearningResources = () => {
    setIsOpenMenuLearningResources(!isOpenMenuLearningResources);
  };

  const onClickLink = () => {
    handleCloseMenu();
  };

  return (
    <div className="absolute bg-white w-full shadow-2.5xl">
      <div className="flex px-4 flex-col gap-4">
        <ButtonBase
          variant="outline"
          title="Sign In"
          className="text-primary font-bold text-base"
        ></ButtonBase>
        <ButtonBase
          variant="filled"
          title="Sign Up"
          className="text-white font-bold text-base"
        ></ButtonBase>
      </div>
      <div className="flex px-4 py-6 flex-col gap-6">
        {LINK_NAVBAR.map((link) => (
          <div
            key={link}
            className={`text-neutral-grey-light text-base font-bold ${
              isOpenMenuLearningResources &&
              link.name === "Learning Resources" &&
              "bg-magnolia py-3"
            }`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <Link href={link.link} onClick={onClickLink}>
                  {link.name}
                </Link>
                {link.name === "Learning Resources" && (
                  <div
                    className={`${
                      !isOpenMenuLearningResources && "-rotate-90"
                    } cursor-pointer`}
                    onClick={handelOpenMenuLearningResources}
                  >
                    <ArrowIcon />
                  </div>
                )}
              </div>
              {isOpenMenuLearningResources &&
                link.name === "Learning Resources" && (
                  <div className="px-4 flex flex-col gap-4">
                    {MENU_LEARNING_RESOURCES.map((menu) => (
                      <Link
                        key={menu}
                        href={menu.link}
                        className="text-neutral-grey-light text-sm font-normal"
                      >
                        {menu.name}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
