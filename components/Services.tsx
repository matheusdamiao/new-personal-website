import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import blog from "./../assets/icons/blog.svg";
import browser from "./../assets/icons/browser-www.svg";
import phone from "./../assets/icons/cellphone.svg";
import cloud from "./../assets/icons/cloud.svg";

const Services = () => {
  const { t: translate } = useTranslation("index");

  return (
    <div className="flex flex-col md:px-44 px-9 py-40 dark:bg-lightBlack bg-white xl:h-full md:h-full">
      <div className="flex justify-start items-center gap-3 w-full ">
        <span className="font-Source text-sm md:text-xl text-lightOrange">
          [2]
        </span>
        <h2 className="font-Title text-2xl md:text-4xl tracking-[6.5%]">
          {translate("services.title")}
        </h2>
      </div>
      <div className="flex flex-wrap w-4/5 justify-between items-center mt-16 md:mt-20 gap-20 md:gap-15">
        <div className="flex flex-col gap-4 md:gap-5 max-w-md">
          <Image src={browser} alt="" />
          <h3 className="text-darkBlack font-semibold text-lg md:text-2xl dark:text-white">
            {translate("services.topic1.title")}
          </h3>
          <p className="text-darkGray dark:text-lightGray">
            {translate("services.topic1.text")}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-5 max-w-sm">
          <Image src={blog} alt="" />
          <h3 className="text-darkBlack font-semibold text-lg md:text-2xl dark:text-white">
            {translate("services.topic2.title")}
          </h3>
          <p className="text-darkGray dark:text-lightGray">
            {translate("services.topic2.text")}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-5 max-w-sm">
          <Image src={phone} alt="" />
          <h3 className="text-darkBlack font-semibold text-lg md:text-2xl dark:text-white">
            {translate("services.topic3.title")}
          </h3>
          <p className="text-darkGray dark:text-lightGray">
            {translate("services.topic3.text")}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-5 max-w-sm">
          <Image src={cloud} alt="" />
          <h3 className="text-darkBlack font-semibold text-lg md:text-2xl dark:text-white">
            {translate("services.topic4.title")}
          </h3>
          <p className="text-darkGray dark:text-lightGray">
            {translate("services.topic4.text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
