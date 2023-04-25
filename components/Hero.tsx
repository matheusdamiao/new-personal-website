import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Language } from "./Menu";
import { useRouter } from "next/router";

const Hero = () => {
  const { t: translate } = useTranslation("index");
  const { locale, locales } = useRouter();

  return (
    <>
      {/* <div className="flex justify-center items-center absolute w-full h-full">
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 0.4, scale: 1.5 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 3, opacity: 0.1 }}
          
          className="rounded-full border-solid border-x-2 border-lightGray w-[300px] h-[300px] animate-pulse"
        ></motion.div>
      </div> */}
      <div
        id="hero"
        className="pl-10 pr-3 pt-0 w-full h-screen flex-col flex items-start px-9 lg:px-44 justify-center bg-white dark:bg-lightBlack"
      >
        <div className="flex flex-col items-start z-10">
          <div className="flex flex-wrap gap-2">
            <motion.div
              initial={{ x: -200, opacity: 0, scale: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="text-xl md:text-xl text-lightOrange dark:text-lightOrange "
            >
              {translate("header.title")}
            </motion.div>
            <motion.div
              initial={{ x: -500, opacity: 0, scale: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 2.5 }}
              className="text-xl md:text-xl text-darkBlack dark:text-white "
            >
              {translate("header.subtitle")}
            </motion.div>
          </div>

          <motion.div
            initial={{ x: -1500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3.2 }}
            className="text-4xl sm:text-6xl leading-[3rem] md:leading-[4rem] font-regular text-darkBlack dark:text-white py-2 max-w-[1200px] pr-2 sm:pr-0 "
          >
            {translate("header.body")}
          </motion.div>
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0, y: 50 }}
            transition={{ delay: 4 }}
            whileHover={{ scale: 1.1 }}
          >
            {/* {locales
              ?.filter((loc) => loc === locale)
              .map((l) => (
                <a
                  key={l}
                  className="text-lg shadow-xl hover:shadow-none transition-shadow text-lightOrange rounded-2xl bg-[#D9D2CF] dark:bg-transparent dark:border-solid dark:border-2 py-[23px] px-[35px] mt-10 border-orange-400"
                  href="#contact"
                >
                  {translate("header.button")}
                </a>
              ))} */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
