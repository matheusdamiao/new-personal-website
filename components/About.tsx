import Image from "next/image";
import React, { useState } from "react";
import avatar from "./../assets/images/avatar.svg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const { t: translate } = useTranslation("index");

  return (
    <div
      id="about"
      className="flex flex-col w-full md:h-full lg:h-full items-center md:px-44 px-9 py-40 dark:bg-darkBlack gap-10 bg-white "
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className="flex justify-start items-center gap-3 w-full"
      >
        <h2 className="font-Source text-4xl md:text-7xl tracking-[6.5%] transform hover:text-darkOrange hover:translate-x-2 transition duration-300">
          {translate("about.title")}
        </h2>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className="flex pt-[40px] w-full gap-8 justify-center lg:justify-start lg:gap-22 xl:gap-52 flex-wrap-reverse lg:flex-nowrap"
      >
        <div className="flex justify-center">
          <p className="font-Source max-w-[900px] text-sm md:text-lg leading-[32px] md:leading-[32px] text-lightBlack dark:text-white">
            {translate("about.body")}
            {readMore && <span>{translate("about.moreBody")}</span>}
            <button onClick={() => setReadMore(!readMore)}>
              {" "}
              {readMore ? "hide" : "read more"}
            </button>
          </p>
        </div>
        {/* <div className=" md:max-w-[250px]">
          <Image src={avatar} alt="" className="md:w-full w-32" />
        </div> */}
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className="flex flex-col w-full"
      >
        <div>
          <h3 className="font-Source text-darkBlack dark:text-white text-sm md:text-lg font-semibold py-7 ">
            {translate("about.techs.title")}
          </h3>
        </div>
        <div className="flex gap-0 md:gap-0 lg:gap-0 xl:gap-20 font-Source flex-wrap pl-5 pb-10">
          <ul>
            <li className="list-disc">{translate("about.techs.topic1")}</li>
            <li className="list-disc">{translate("about.techs.topic2")}</li>
            <li className="list-disc">{translate("about.techs.topic3")}</li>
          </ul>
          <ul>
            <li className="list-disc">{translate("about.techs.topic4")}</li>
            <li className="list-disc">{translate("about.techs.topic5")}</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
