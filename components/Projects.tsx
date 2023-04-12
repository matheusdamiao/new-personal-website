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

  return (
    <div className="flex flex-col w-full md:h-full lg:h-full items-center md:px-44 px-9 py-40 dark:bg-darkBlack bg-white">
      <div className="flex justify-start items-center gap-3 w-full">
        <span className="font-Source text-sm md:text-xl text-lightOrange">
          [3]
        </span>
        <h2 className="font-Title text-2xl md:text-4xl tracking-[6.5%]">
          {translate("projects.title")}
        </h2>
      </div>

      <div className="flex flex-col flex-wrap w-full">
        <div className="flex xl:flex-wrap flex-col xl:h-screen mt-10 xl:mt-40">
          <h2 className="text-lg font-semibold text-darkBlack lg:text-2xl pt-16">
            {" "}
            {translate("projects.project1.title")}{" "}
          </h2>
          <h3 className="text-sm text-darkGray lg:text-lg">
            {" "}
            {translate("projects.project1.subtitle")}
          </h3>
          <div className="pt-12 lg:order-6">
            <Image src={advogadas} alt="" />
          </div>

          <p className="max-w-[500px] text-xs text-darkGray lg:text-sm pb-10 xl:py-20">
            {translate("projects.project1.text")}
          </p>
          <h4 className="text-xs text-darkGray lg:text-sm">
            {translate("projects.project1.techs")}
          </h4>
        </div>

        <div className="flex xl:flex-wrap flex-col xl:h-screen mt-10 xl:mt-40">
          <h2 className="text-lg font-semibold text-darkBlack lg:text-2xl pt-16">
            {" "}
            {translate("projects.project2.title")}{" "}
          </h2>
          <h3 className="text-sm text-darkGray lg:text-lg">
            {" "}
            {translate("projects.project2.subtitle")}
          </h3>
          <div className="pt-12 lg:order-6">
            <Image src={dashboard} alt="" />
          </div>

          <p className="max-w-[500px] text-xs text-darkGray lg:text-sm py-10 xl:py-20">
            {translate("projects.project2.text")}
          </p>
          <h4 className="text-xs text-darkGray lg:text-sm">
            {translate("projects.project2.techs")}
          </h4>
        </div>

        <div className="flex xl:flex-wrap flex-col xl:h-screen mt-10 xl:mt-40">
          <h2 className="text-lg font-semibold text-darkBlack lg:text-2xl pt-16">
            {" "}
            {translate("projects.project3.title")}{" "}
          </h2>
          <h3 className="text-sm text-darkGray lg:text-lg">
            {" "}
            {translate("projects.project3.subtitle")}
          </h3>
          <div className="pt-12 lg:order-6">
            <Image src={pedroadv} alt="" />
          </div>

          <p className="max-w-[500px] text-xs text-darkGray lg:text-sm py-10 xl:py-20">
            {translate("projects.project3.text")}
          </p>
          <h4 className="text-xs text-darkGray lg:text-sm">
            {translate("projects.project3.techs")}
          </h4>
        </div>

        <div className="flex xl:flex-wrap flex-col xl:h-screen mt-10 xl:mt-40">
          <h2 className="text-lg font-semibold text-darkBlack lg:text-2xl pt-16">
            {" "}
            {translate("projects.project4.title")}{" "}
          </h2>
          <h3 className="text-sm text-darkGray lg:text-lg">
            {" "}
            {translate("projects.project4.subtitle")}
          </h3>
          <div className="pt-12 lg:order-6">
            <Image src={patriciaDesigner} alt="" />
          </div>

          <p className="max-w-[500px] text-xs text-darkGray lg:text-sm py-10 xl:py-20">
            {translate("projects.project4.text")}
          </p>
          <h4 className="text-xs text-darkGray lg:text-sm">
            {translate("projects.project4.techs")}
          </h4>
        </div>

        <div className="flex xl:flex-wrap flex-col xl:h-screen mt-10 xl:mt-40">
          <h2 className="text-lg font-semibold text-darkBlack lg:text-2xl pt-16">
            {" "}
            {translate("projects.project5.title")}{" "}
          </h2>
          <h3 className="text-sm text-darkGray lg:text-lg">
            {" "}
            {translate("projects.project5.subtitle")}
          </h3>
          <div className="pt-12 lg:order-6">
            <Image src={pedrofoto} alt="" />
          </div>

          <p className="max-w-[500px] text-xs text-darkGray lg:text-sm py-10 xl:py-20">
            {translate("projects.project5.text")}
          </p>
          <h4 className="text-xs text-darkGray lg:text-sm">
            {translate("projects.project5.techs")}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
