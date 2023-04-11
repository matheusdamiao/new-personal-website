import React, { useState } from "react";
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";
import logo from "./../assets/images/logo_md.svg";
import logoWhite from "./../assets/images/logoWhite.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

type Language = {
  locales: string[] | undefined;
};

const Menu = ({ locales }: Language) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-end justify-between w-full px-10 py-8 fixed bg-white dark:bg-lightBlack bg-opacity-50 backdrop-blur-sm dark:bg-opacity-50">
      <Image alt="" src={theme === "dark" ? logo : logoWhite} width={80} />
      <div className="flex">
        <ToggleLanguage locales={locales} />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Menu;
