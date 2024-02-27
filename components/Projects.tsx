import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import advogadas from "./../assets/images/advogadas.svg";
import dashboard from "./../assets/images/dashboard.svg";
import pedroadv from "./../assets/images/pedroadvnewsha.svg";
import patriciaDesigner from "./../assets/images/patricia-designer.svg";
import pedrofoto from "./../assets/images/pedro-fotografia.svg";
import Image from "next/image";
import rocket from "./../assets/icons/rocket-icon.gif";
import link from "./../assets/icons/share-icon.gif";
import code from "./../assets/icons/code-icon.gif";

import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const { t: translate } = useTranslation("index");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div
      id="projects"
      className="flex flex-col flex-wrap w-full md:h-full lg:h-full items-center py-40 dark:bg-lightBlack bg-white"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className=" flex px-9 items-center justify-center  lg:px-44 flex-wrap lg:flex-nowrap lg:gap-10"
      >
        <h2 className="flex font-Source text-center text-3xl gap-4 md:text-5xl tracking-[6.5%] transform hover:text-darkOrange hover:translate-x-2 transition duration-300">
          {translate("projects.title")}
        </h2>
        <Image src={rocket} alt="" className="w-[80px]" />
      </motion.div>

      {/* PROJETO 1 */}
      {/* /////////////////////// */}
      <div className="flex flex-col flex-wrap w-full" ref={ref}>
        <div className="flex flex-wrap flex-col mt-14 mb-30 md:mb-0 xl:mt-32">
          <h2 className="text-2xl text-center font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 ">
            {" "}
            {translate("projects.project1.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-center text-gray-700 dark:text-lightGray lg:text-base ">
            {" "}
            {translate("projects.project1.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1  lg:flex-none">
              <div className="w-[700px] hidden md:block">
                <div>
                  <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                      <video
                        src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312490/personal%20site/club-video-desktop_wtunwf.mp4"
                        muted
                        loop
                        autoPlay
                        className="h-[156px] md:h-[278px] w-full rounded-xl"
                      ></video>
                    </div>
                  </div>
                  <div className="relative mx-auto bg-gray-900 dark:bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                  </div>
                </div>
              </div>

              <div className="md:hidden block">
                <div className="flex-0 relative mx-auto border-gray-800 dark:border-gray-900 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-slate-600 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800 dark:bg-gray-900">
                    <video
                      src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312493/personal%20site/club-video-mobile_ddlq0c.mp4"
                      muted
                      loop
                      autoPlay
                      className="block w-[272px] h-[572px] opacity-8"
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col-reverse max-w-lg px-8">
              <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700"
                  href="https://clubtransatlantico.com.br/"
                  target="_blank"
                >
                  <Image
                    src={link}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Link
                </a>

                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700 "
                  href="https://github.com/matheusdamiao/club-transatlantico"
                  target="_blank"
                >
                  <Image
                    src={code}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Código
                </a>
              </div>
              <div className="pt-10 max-w-3xl m-auto">
                <p className=" text-sm text-darkGray lg:w-full dark:text-white lg:text-base pb-2">
                  {translate("projects.project1.text")}
                </p>
                <h4 className=" text-sm text-lightGray pt-4 lg:text-sm text-center lg:text-left hover:text-lightOrange duration-500">
                  {translate("projects.project1.techs")}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* PROJETO 2 */}
        {/* /////////////////////// */}

        <div className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40">
          <h2 className="text-2xl px-9 text-center font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 ">
            {" "}
            {translate("projects.project2.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-center text-gray-700 dark:text-lightGray lg:text-base ">
            {" "}
            {translate("projects.project2.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1  lg:flex-none">
              <div className="w-[700px] hidden md:block">
                <div>
                  <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                      <video
                        src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312485/personal%20site/advgs-video-desktop_wmnjyh.mp4"
                        muted
                        loop
                        autoPlay
                        className="h-[156px] md:h-[278px] w-full rounded-xl"
                      ></video>
                    </div>
                  </div>
                  <div className="relative mx-auto bg-gray-900 dark:bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                  </div>
                </div>
              </div>

              <div className="md:hidden block">
                <div className="flex-0 relative mx-auto border-gray-800 dark:border-gray-900 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-slate-600 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800 dark:bg-gray-900">
                    <video
                      src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312488/personal%20site/advgs-video-mobile_gyi1hp.mp4"
                      muted
                      loop
                      autoPlay
                      className="block w-[272px] h-[572px] opacity-8"
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col-reverse max-w-lg px-8">
              <div className="flex gap-4 pt-4 justify-evenly lg:justify-start">
                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700"
                  href="https://cupulillemedeirosadv.com/"
                  target="_blank"
                >
                  <Image
                    src={link}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Link
                </a>

                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700"
                  href="https://github.com/matheusdamiao/gatsby-blog"
                  target="_blank"
                >
                  <Image
                    src={code}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Código
                </a>
              </div>
              <div className="pt-10 max-w-3xl m-auto">
                <p className=" text-sm text-darkGray lg:w-full dark:text-white lg:text-base pb-2">
                  {translate("projects.project2.text")}
                </p>
                <h4 className=" text-sm text-lightGray pt-4 lg:text-sm text-center lg:text-left hover:text-lightOrange duration-500">
                  {translate("projects.project2.techs")}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* PROJETO 3 */}
        {/* /////////////////////// */}

        <div className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40">
          <h2 className="text-2xl text-center font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 ">
            {" "}
            {translate("projects.project3.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-center text-gray-700 dark:text-lightGray lg:text-base ">
            {" "}
            {translate("projects.project3.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1  lg:flex-none">
              <div className="w-[700px] hidden md:block">
                <div>
                  <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                      <video
                        src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312484/personal%20site/acquatis-video-browser_jber03.mp4"
                        muted
                        loop
                        autoPlay
                        className="h-[156px] md:h-[278px] w-full rounded-xl"
                      ></video>
                    </div>
                  </div>
                  <div className="relative mx-auto bg-gray-900 dark:bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                  </div>
                </div>
              </div>

              <div className="md:hidden block">
                <div className="flex-0 relative mx-auto border-gray-800 dark:border-gray-900 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-slate-600 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800 dark:bg-gray-900">
                    <video
                      src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312488/personal%20site/acquatis-video-mobile_cvexni.mp4"
                      muted
                      loop
                      autoPlay
                      className="block w-[272px] h-[572px] opacity-8"
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col-reverse max-w-lg px-8">
              <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700"
                  href="https://acquatis-front.vercel.app/"
                  target="_blank"
                >
                  <Image
                    src={link}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Link
                </a>

                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700"
                  href="https://github.com/Brunoporto2702/acquatis-front"
                  target="_blank"
                >
                  <Image
                    src={code}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Código
                </a>
              </div>
              <div className="pt-10 max-w-3xl m-auto">
                <p className=" text-sm text-darkGray lg:w-full dark:text-white lg:text-base pb-2">
                  {translate("projects.project3.text")}
                </p>
                <h4 className=" text-sm text-lightGray pt-4 lg:text-sm text-center lg:text-left hover:text-lightOrange duration-500">
                  {translate("projects.project3.techs")}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* PROJETO 4 */}
        {/* /////////////////////// */}

        <div className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40">
          <h2 className="text-2xl text-center font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 ">
            {" "}
            {translate("projects.project4.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-center text-gray-700 dark:text-lightGray lg:text-base">
            {" "}
            {translate("projects.project4.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1  lg:flex-none">
              <div className="w-[700px] hidden md:block">
                <div>
                  <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                      <video
                        src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312481/personal%20site/psi-site-desktop_qabxvi.mp4"
                        muted
                        loop
                        autoPlay
                        className="h-[156px] md:h-[278px] w-full rounded-xl"
                      ></video>
                    </div>
                  </div>
                  <div className="relative mx-auto bg-gray-900 dark:bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                  </div>
                </div>
              </div>

              <div className="md:hidden block">
                <div className="flex-0 relative mx-auto border-gray-800 dark:border-gray-900 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-slate-600 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800 dark:bg-gray-900">
                    <video
                      src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312488/personal%20site/psi-site-mobile_b7d3p2.mp4"
                      muted
                      loop
                      autoPlay
                      className="block w-[272px] h-[572px] opacity-8"
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col-reverse max-w-lg px-8">
              <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700"
                  href="https://raquelsilveira.vercel.app/home"
                  target="_blank"
                >
                  <Image
                    src={link}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Link
                </a>

                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700"
                  href="https://github.com/matheusdamiao/jest-next-testing"
                  target="_blank"
                >
                  <Image
                    src={code}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Código
                </a>
              </div>
              <div className="pt-10 max-w-3xl m-auto">
                <p className=" text-sm text-darkGray lg:w-full dark:text-white lg:text-base pb-2">
                  {translate("projects.project4.text")}
                </p>
                <h4 className=" text-sm text-lightGray pt-4 lg:text-sm text-center lg:text-left hover:text-lightOrange duration-500">
                  {translate("projects.project4.techs")}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* PROJETO 5 */}
        {/* /////////////////////// */}
        <div className="flex flex-wrap flex-col mt-28 mb-30 md:mb-0 xl:mt-40">
          <h2 className="text-2xl text-center font-semibold text-darkBlack dark:text-white lg:text-2xl pt-16 ">
            {" "}
            {translate("projects.project5.title")}{" "}
          </h2>
          <h3 className="text-sm pt-2 text-center text-gray-700 dark:text-lightGray lg:text-base ">
            {" "}
            {translate("projects.project5.subtitle")}
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <div className="pt-12 shrink-1  lg:flex-none">
              <div className="w-[700px] hidden md:block">
                <div>
                  <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                      <video
                        src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312487/personal%20site/adv-site-desktop_cmk2zl.mp4"
                        muted
                        loop
                        autoPlay
                        className="h-[156px] md:h-[278px] w-full rounded-xl"
                      ></video>
                    </div>
                  </div>
                  <div className="relative mx-auto bg-gray-900 dark:bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                  </div>
                </div>
              </div>

              <div className="md:hidden block">
                <div className="flex-0 relative mx-auto border-gray-800 dark:border-gray-900 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-slate-600 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800 dark:bg-gray-900">
                    <video
                      src="https://res.cloudinary.com/dg5yog3gf/video/upload/v1707312487/personal%20site/adv-site-mobile_mhtirl.mp4"
                      muted
                      loop
                      autoPlay
                      className="block w-[272px] h-[572px] opacity-8"
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col-reverse max-w-lg px-8">
              <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700"
                  href="https://site-advogado-template.netlify.app/"
                  target="_blank"
                >
                  <Image
                    src={link}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Link
                </a>

                <a
                  className="flex gap-2 items-center dark:text-gray-400 text-gray-700"
                  href="https://github.com/matheusdamiao/template-lawyer-site"
                  target="_blank"
                >
                  <Image
                    src={code}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                  Código
                </a>
              </div>
              <div className="pt-10 max-w-3xl m-auto">
                <p className=" text-sm text-darkGray lg:w-full dark:text-white lg:text-base pb-2">
                  {translate("projects.project5.text")}
                </p>
                <h4 className=" text-sm text-lightGray pt-4 lg:text-sm text-center lg:text-left hover:text-lightOrange duration-500">
                  {translate("projects.project5.techs")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
