import React, { useState } from "react";
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";
// import logo from "./../assets/images/logo_md.svg";
// import logoWhite from "./../assets/images/logoWhite.svg";
import logo from "./../assets/icons/logo-brand-dark.svg";
import logoWhite from "./../assets/icons/logo-brand-light.svg";

import Image from "next/image";
import { useTheme } from "next-themes";

type Language = {
  locales: string[] | undefined;
};

const Menu = ({ locales }: Language) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-end z-50 justify-between w-full px-10 py-3 fixed bg-white dark:bg-lightBlack bg-opacity-50 backdrop-blur-sm dark:bg-opacity-50">
      <Image alt="" src={theme === "dark" ? logoWhite : logo} width={80} />
      <div className="flex">
        <ToggleLanguage locales={locales} />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Menu;
