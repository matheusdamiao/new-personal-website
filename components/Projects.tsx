import React from "react";
import { useTranslation } from "react-i18next";
import advogadas from "./../assets/images/advogadas.svg";
import dashboard from "./../assets/images/dashboard.svg";
import pedroadv from "./../assets/images/pedroadvnewsha.svg";
import patriciaDesigner from "./../assets/images/patricia-designer.svg";
import pedrofoto from "./../assets/images/pedro-fotografia.svg";
import Image from "next/image";

const Projects = () => {
  const { t: translate } = useTranslation("index");

  // md:px-44
  return (
    <div className="flex flex-col w-full md:h-full lg:h-full items-center py-40 dark:bg-lightBlack bg-white">
      <div className="flex justify-start items-end gap-1 w-full px-9">
        {/* <span className="font-Source text-xl md:text-xl text-lightOrange">
          [3]
        </span> */}
        <h2 className="font-Source text-5xl md:text-7xl tracking-[6.5%] transform hover:text-darkOrange hover:translate-x-2 transition duration-300">
          {translate("projects.title")}
        </h2>
      </div>

      <div className="flex flex-col flex-wrap w-full">
        <div className="flex flex-wrap flex-col mt-28 mb-40 md:mb-0 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 px-9">
            {" "}
            {translate("projects.project1.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg px-9">
            {" "}
            {translate("projects.project1.subtitle")}
          </h3>

          <div className="flex flex-row flex-wrap xl:flex-nowrap items-center">
            <div className="pt-12 shrink-1 flex xl:flex-none">
              <Image className="w-full" src={advogadas} alt="" />
            </div>

            <div className="w-full shrink-[2]">
              <p className="text-base text-darkGray dark:text-white lg:text-base pb-2 px-9">
                {translate("projects.project1.text")}
              </p>
              <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500 px-9">
                {translate("projects.project1.techs")}
              </h4>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-wrap flex-col xl:h-screen mb-40 md:mb-0 mt-10 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16">
            {" "}
            {translate("projects.project2.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-darkGray dark:text-lightGray lg:text-lg">
            {" "}
            {translate("projects.project2.subtitle")}
          </h3>
          <div className="pt-12 lg:order-6">
            <Image className="" src={dashboard} alt="" />
          </div>

          <p className="max-w-[500px] text-base text-darkGray dark:text-white lg:text-base pb-10 xl:py-20">
            {translate("projects.project2.text")}
          </p>
          <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500">
            {translate("projects.project2.techs")}
          </h4>
        </div>

        <div className="flex xl:flex-wrap flex-col xl:h-screen mb-40 md:mb-0 mt-10 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16">
            {" "}
            {translate("projects.project3.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-darkGray dark:text-lightGray lg:text-lg">
            {" "}
            {translate("projects.project3.subtitle")}
          </h3>
          <div className="pt-12 lg:order-6">
            <Image
              className="opacity-40 hover:opacity-100 hover:scale-105 transition duration-300"
              src={pedroadv}
              alt=""
            />
          </div>

          <p className="max-w-[500px] text-base text-darkGray dark:text-white lg:text-base pb-10 xl:py-20">
            {translate("projects.project3.text")}
          </p>
          <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500">
            {translate("projects.project3.techs")}
          </h4>
        </div>

        <div className="flex xl:flex-wrap flex-col xl:h-screen mb-40 md:mb-0 mt-10 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16">
            {" "}
            {translate("projects.project4.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-darkGray dark:text-lightGray lg:text-lg">
            {" "}
            {translate("projects.project4.subtitle")}
          </h3>
          <div className="pt-12 lg:order-6">
            <Image
              className="opacity-40 hover:opacity-100 hover:scale-105 transition duration-300"
              src={patriciaDesigner}
              alt=""
            />
          </div>

          <p className="max-w-[500px] text-base text-darkGray dark:text-white lg:text-base pb-10 xl:py-20">
            {translate("projects.project4.text")}
          </p>
          <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500">
            {translate("projects.project4.techs")}
          </h4>
        </div>

        <div className="flex xl:flex-wrap flex-col xl:h-screen mb-40 md:mb-0 mt-10 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16">
            {" "}
            {translate("projects.project5.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-darkGray dark:text-lightGray lg:text-lg">
            {" "}
            {translate("projects.project5.subtitle")}
          </h3>
          <div className="pt-12 lg:order-6">
            <Image
              className="opacity-40 hover:opacity-100 hover:scale-105 transition duration-300"
              src={pedrofoto}
              alt=""
            />
          </div>

          <p className="max-w-[500px] text-base text-darkGray dark:text-white lg:text-base pb-10 xl:py-20">
            {translate("projects.project5.text")}
          </p>
          <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500">
            {translate("projects.project5.techs")}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
