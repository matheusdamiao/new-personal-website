import React from "react";
import { useTranslation } from "react-i18next";
import advogadas from "./../assets/images/advogadas.svg";
import dashboard from "./../assets/images/dashboard.svg";
import pedroadv from "./../assets/images/pedroadvnewsha.svg";
import patriciaDesigner from "./../assets/images/patricia-designer.svg";
import pedrofoto from "./../assets/images/pedro-fotografia.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const { t: translate } = useTranslation("index");

  return (
    <div
      id="projects"
      className="flex flex-col flex-wrap w-full md:h-full lg:h-full items-center py-40 dark:bg-lightBlack bg-white"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className=" flex justify-start items-end gap-1 w-full px-9 lg:px-44"
      >
        <h2 className="font-Source text-5xl md:text-7xl tracking-[6.5%] transform hover:text-darkOrange hover:translate-x-2 transition duration-300">
          {translate("projects.title")}
        </h2>
      </motion.div>

      <div className="flex flex-col flex-wrap w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40"
        >
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-4xl pt-16 text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project1.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project1.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={advogadas} alt="" />
            </div>

            <div className="w-full flex flex-col-reverse">
              <div className="flex xl:w-full lg:justify-start lg:gap-2 xl:gap-10 flex-nowrap xl:flex-wrap justify-center gap-5">
                <button className="py-4 px-6 text-base dark:shadow-lg shadow-lg shadow-darkGray dark:hover:shadow-none dark:border-none dark:shadow-darkGray hover:shadow-none transition-shadow dark:text-darkBlack text-white font-bold rounded-2xl bg-[#29201d] dark:bg-white dark:border-2 mt-10">
                  Visite o site
                </button>
                <button className=" py-4 font-bold px-6 text-base shadow-lg dark:shadow-darkGray dark:shadow-lg dark:hover:shadow-none hover:shadow-none transition-shadow dark:text-white rounded-2xl dark:bg-transparent dark:border-solid dark:border-2 mt-10 dark:border-white border-solid border-2 border-black">
                  Código{" "}
                </button>
              </div>
              <div>
                <p className="pl-8 lg:pl-0 text-xs text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2">
                  {translate("projects.project1.text")}
                </p>
                <h4 className="pl-8 lg:pl-0 text-sm text-lightGray pt-4 lg:text-sm hover:text-lightOrange duration-500">
                  {translate("projects.project1.techs")}
                </h4>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40"
        >
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-4xl pt-16 text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project3.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project3.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={pedroadv} alt="" />
            </div>

            <div className="w-full flex flex-col-reverse">
              <div className="flex xl:w-full lg:justify-start lg:gap-2 xl:gap-10 flex-nowrap xl:flex-wrap justify-center gap-5">
                <button className="py-4 px-6 text-base dark:shadow-lg shadow-lg shadow-darkGray dark:hover:shadow-none dark:border-none dark:shadow-darkGray hover:shadow-none transition-shadow dark:text-darkBlack text-white font-bold rounded-2xl bg-[#29201d] dark:bg-white dark:border-2 mt-10">
                  Visite o site
                </button>
                <button className=" py-4 font-bold px-6 text-base shadow-lg dark:shadow-darkGray dark:shadow-lg dark:hover:shadow-none hover:shadow-none transition-shadow dark:text-white rounded-2xl dark:bg-transparent dark:border-solid dark:border-2 mt-10 dark:border-white border-solid border-2 border-black">
                  Código{" "}
                </button>
              </div>
              <div>
                <p className="pl-8 lg:pl-0 text-xs text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2">
                  {translate("projects.project3.text")}
                </p>
                <h4 className="pl-8 lg:pl-0 text-sm text-lightGray pt-4 lg:text-sm hover:text-lightOrange duration-500">
                  {translate("projects.project3.techs")}
                </h4>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40"
        >
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-4xl pt-16 text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project4.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project4.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={patriciaDesigner} alt="" />
            </div>

            <div className="w-full flex flex-col-reverse">
              <div className="flex xl:w-full lg:justify-start lg:gap-2 xl:gap-10 flex-nowrap xl:flex-wrap justify-center gap-5">
                <button className="py-4 px-6 text-base dark:shadow-lg shadow-lg shadow-darkGray dark:hover:shadow-none dark:border-none dark:shadow-darkGray hover:shadow-none transition-shadow dark:text-darkBlack text-white font-bold rounded-2xl bg-[#29201d] dark:bg-white dark:border-2 mt-10">
                  Visite o site
                </button>
                <button className=" py-4 font-bold px-6 text-base shadow-lg dark:shadow-darkGray dark:shadow-lg dark:hover:shadow-none hover:shadow-none transition-shadow dark:text-white rounded-2xl dark:bg-transparent dark:border-solid dark:border-2 mt-10 dark:border-white border-solid border-2 border-black">
                  Código{" "}
                </button>
              </div>
              <div>
                <p className="pl-8 lg:pl-0 text-xs text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2">
                  {translate("projects.project4.text")}
                </p>
                <h4 className="pl-8 lg:pl-0 text-sm text-lightGray pt-4 lg:text-sm hover:text-lightOrange duration-500">
                  {translate("projects.project4.techs")}
                </h4>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40"
        >
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-4xl pt-16 text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project5.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project5.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={pedrofoto} alt="" />
            </div>

            <div className="w-full flex flex-col-reverse">
              <div className="flex xl:w-full lg:justify-start lg:gap-2 xl:gap-10 flex-nowrap xl:flex-wrap justify-center gap-5">
                <button className="py-4 px-6 text-base dark:shadow-lg shadow-lg shadow-darkGray dark:hover:shadow-none dark:border-none dark:shadow-darkGray hover:shadow-none transition-shadow dark:text-darkBlack text-white font-bold rounded-2xl bg-[#29201d] dark:bg-white dark:border-2 mt-10">
                  Visite o site
                </button>
                <button className=" py-4 font-bold px-6 text-base shadow-lg dark:shadow-darkGray dark:shadow-lg dark:hover:shadow-none hover:shadow-none transition-shadow dark:text-white rounded-2xl dark:bg-transparent dark:border-solid dark:border-2 mt-10 dark:border-white border-solid border-2 border-black">
                  Código{" "}
                </button>
              </div>
              <div>
                <p className="pl-8 lg:pl-0 text-xs text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2">
                  {translate("projects.project5.text")}
                </p>
                <h4 className="pl-8 lg:pl-0 text-sm text-lightGray pt-4 lg:text-sm hover:text-lightOrange duration-500">
                  {translate("projects.project5.techs")}
                </h4>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40"
        >
          <h2 className="text-2xl font-semibold text-darkBlack dark:text-white lg:text-4xl pt-16 text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project2.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-lightGray dark:text-lightGray lg:text-lg text-left pl-8 md:pl-24">
            {" "}
            {translate("projects.project2.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1 flex lg:flex-none">
              <Image className="w-full" src={dashboard} alt="" />
            </div>

            <div className="w-full flex flex-col-reverse">
              <div className="flex xl:w-full lg:justify-start lg:gap-2 xl:gap-10 flex-nowrap xl:flex-wrap justify-center gap-5">
                <button className="py-4 px-6 text-base dark:shadow-lg shadow-lg shadow-darkGray dark:hover:shadow-none dark:border-none dark:shadow-darkGray hover:shadow-none transition-shadow dark:text-darkBlack text-white font-bold rounded-2xl bg-[#29201d] dark:bg-white dark:border-2 mt-10">
                  Visite o site
                </button>
                <button className=" py-4 font-bold px-6 text-base shadow-lg dark:shadow-darkGray dark:shadow-lg dark:hover:shadow-none hover:shadow-none transition-shadow dark:text-white rounded-2xl dark:bg-transparent dark:border-solid dark:border-2 mt-10 dark:border-white border-solid border-2 border-black">
                  Código{" "}
                </button>
              </div>
              <div>
                <p className="pl-8 lg:pl-0 text-xs text-darkGray lg:w-4/5 dark:text-white lg:text-base pb-2">
                  {translate("projects.project2.text")}
                </p>
                <h4 className="pl-8 lg:pl-0 text-sm text-lightGray pt-4 lg:text-sm hover:text-lightOrange duration-500">
                  {translate("projects.project2.techs")}
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
