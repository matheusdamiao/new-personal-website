import React, { useState } from "react";
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";
import logo from "./../assets/images/logo_md.svg";
import logoWhite from "./../assets/images/logoWhite.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export type Language = {
  locales: string[] | undefined;
};

const Menu = ({ locales }: Language) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ x: -2000 }}
      animate={{ x: 0 }}
      transition={{ delay: 1 }}
      className="flex items-end z-50 justify-between w-full px-10 py-3 fixed bg-white dark:bg-lightBlack bg-opacity-50 backdrop-blur-sm dark:bg-opacity-50"
    >
      <Image alt="" src={theme === "dark" ? logo : logoWhite} width={80} />
      <div className="flex">
        <ToggleLanguage locales={locales} />
        <ToggleTheme />
      </div>
    </motion.div>
  );
};

export default Menu;
