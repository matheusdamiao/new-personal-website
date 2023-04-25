import React from "react";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const variants = {
    dark: {
      transition: { duration: 0.4 },
      initial: { x: 0 },
      x: 15,
    },
    light: {
      initial: { x: 15 },
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const handleToggle = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <button className="p-2 z-[150]" onClick={() => handleToggle()}>
      <div className="relative w-[35px] h-[20px] rounded-xl flex items-center dark:bg-darkBlack transition-all duration-1000 bg-lightGray shadow-inner">
        <motion.div
          variants={variants}
          animate={theme === "dark" ? "dark" : "light"}
          className="w-[16px] left-[3px] absolute h-[16px] bg-lightOrange rounded-xl dark:bg-darkGray"
        ></motion.div>
      </div>
    </button>
  );
};

export default ToggleTheme;
