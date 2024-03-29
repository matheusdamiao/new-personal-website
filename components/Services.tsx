import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import blog from "./../assets/icons/blog.svg";
import browser from "./../assets/icons/browser-www.svg";
import deskIcon from "./../assets/icons/desktop-icon.gif";
import pencilIcon from "./../assets/icons/pencil-icon.gif";

import phone from "./../assets/icons/ebook-icon.gif";
import cloud from "./../assets/icons/api-icon.gif";
import { motion } from "framer-motion";

const Services = () => {
  const { t: translate } = useTranslation("index");

  return (
    <div
      id="services"
      className="flex flex-col md:px-44 px-9 py-40 dark:bg-darkBlack bg-white xl:h-full md:h-full"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className="flex justify-start items-center gap-3 w-full flex-col"
      >
        <h2 className="font-Source text-3xl md:text-5xl dark:text-white; transform hover:text-darkOrange hover:translate-x-2 transition duration-300">
          {translate("services.title")}
        </h2>
        {/* <h3>{translate("services.subtitle")}</h3> */}
      </motion.div>

      <div className="flex flex-wrap w-4/5 justify-between items-center mt-16 md:mt-20 gap-20 md:gap-15">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4 md:gap-5 max-w-md"
        >
          <Image src={deskIcon} alt="" className="w-[100px]" />
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            className="text-darkBlack font-semibold text-lg md:text-xl dark:text-white"
          >
            {translate("services.topic1.title")}
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            className="text-darkGray dark:text-lightGray"
          >
            {translate("services.topic1.text")}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4 md:gap-5 max-w-sm"
        >
          <Image src={pencilIcon} alt="" className="w-[100px]" />
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            className="text-darkBlack font-semibold text-lg md:text-xl dark:text-white"
          >
            {translate("services.topic2.title")}
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            className="text-darkGray dark:text-lightGray"
          >
            {translate("services.topic2.text")}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4 md:gap-5 max-w-sm"
        >
          <Image src={phone} alt="" className="w-[100px]" />
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            className="text-darkBlack font-semibold text-lg md:text-xl dark:text-white"
          >
            {translate("services.topic3.title")}
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            className="text-darkGray dark:text-lightGray"
          >
            {translate("services.topic3.text")}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-4 md:gap-5 max-w-sm"
        >
          <Image src={cloud} alt="" className="w-[100px]" />
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            className="text-darkBlack font-semibold text-lg md:text-xl dark:text-white"
          >
            {translate("services.topic4.title")}
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            className="text-darkGray dark:text-lightGray"
          >
            {translate("services.topic4.text")}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
