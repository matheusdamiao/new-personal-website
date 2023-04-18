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
    <div className="flex flex-col flex-wrap w-full md:h-full lg:h-full items-center py-40 dark:bg-lightBlack bg-white">
      <div className="flex justify-start items-end gap-1 w-full px-9 lg:px-44">
        <h2 className="font-Source text-5xl md:text-7xl tracking-[6.5%] transform hover:text-darkOrange hover:translate-x-2 transition duration-300">
          {translate("projects.title")}
        </h2>
      </div>

      <div className="flex flex-col flex-wrap w-full">
        <div className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 text-center">
            {" "}
            {translate("projects.project1.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg text-center">
            {" "}
            {translate("projects.project1.subtitle")}
          </h3>

          <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={advogadas} alt="" />
            </div>

            {/* <div className="w-full">
              <p className="text-base text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2 px-9">
                {translate("projects.project1.text")}
              </p>
              <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500 px-9">
                {translate("projects.project1.techs")}
              </h4>
            </div> */}
          </div>
        </div>

        <div className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 text-center">
            {" "}
            {translate("projects.project3.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg text-center">
            {" "}
            {translate("projects.project3.subtitle")}
          </h3>

          <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={pedroadv} alt="" />
            </div>

            {/* <div className="w-full">
              <p className="text-base text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2 px-9">
                {translate("projects.project3.text")}
              </p>
              <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500 px-9">
                {translate("projects.project3.techs")}
              </h4>
            </div> */}
          </div>
        </div>

        <div className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 text-center">
            {" "}
            {translate("projects.project4.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg text-center">
            {" "}
            {translate("projects.project4.subtitle")}
          </h3>

          <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={patriciaDesigner} alt="" />
            </div>

            {/* <div className="w-full">
              <p className="text-base text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2 px-9">
                {translate("projects.project4.text")}
              </p>
              <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500 px-9">
                {translate("projects.project4.techs")}
              </h4>
            </div> */}
          </div>
        </div>

        <div className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 text-center">
            {" "}
            {translate("projects.project5.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg px-9 text-center">
            {" "}
            {translate("projects.project5.subtitle")}
          </h3>

          <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={pedrofoto} alt="" />
            </div>

            {/* <div className="w-full">
              <p className="text-base text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2 px-9">
                {translate("projects.project5.text")}
              </p>
              <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500 px-9">
                {translate("projects.project5.techs")}
              </h4>
            </div> */}
          </div>
        </div>

        <div className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40">
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 text-center">
            {" "}
            {translate("projects.project2.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg text-center">
            {" "}
            {translate("projects.project2.subtitle")}
          </h3>

          <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={dashboard} alt="" />
            </div>

            {/* <div className="w-full">
              <p className="text-base text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2 px-9">
                {translate("projects.project2.text")}
              </p>
              <h4 className="text-base text-lightGray lg:text-sm hover:text-lightOrange duration-500 px-9">
                {translate("projects.project2.techs")}
              </h4>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
