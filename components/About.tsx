import Image from "next/image";
import React, { useState } from "react";
import avatar from "./../assets/images/avatar.svg";
import { useTranslation } from "react-i18next";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const { t: translate } = useTranslation("index");

  return (
    <div className="flex flex-col w-full md:h-full lg:h-screen items-center md:px-44 px-9 py-40 dark:bg-darkBlack bg-white ">
      <div className="flex justify-start items-center gap-3 w-full">
        <span className="font-Source text-sm md:text-xl text-lightOrange">
          [1]
        </span>
        <h2 className="font-Title text-2xl md:text-4xl tracking-[6.5%]">
          {translate("about.title")}
        </h2>
      </div>
      <div className="flex pt-[40px] w-full gap-8 justify-center lg:justify-start lg:gap-22 xl:gap-52 flex-wrap-reverse lg:flex-nowrap">
        <div className="flex justify-center">
          <p className="font-Source max-w-[900px] text-sm md:text-lg md:leading-[198%]">
            {translate("about.body")}
            {readMore && <span>{translate("about.moreBody")}</span>}
            <button onClick={() => setReadMore(!readMore)}>
              {" "}
              {readMore ? "hide" : "read more"}
            </button>
          </p>
        </div>
        <div className=" md:max-w-[250px]">
          <Image src={avatar} alt="" className="md:w-full w-32" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div>
          <h3 className="font-Source text-darkBlack dark:text-white text-sm md:text-lg font-semibold py-7 ">
            {translate("about.techs.title")}
          </h3>
        </div>
        <div className="flex gap-0 md:gap-0 lg:gap-0 xl:gap-20 font-Source flex-wrap pl-5">
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
      </div>
    </div>
  );
};

export default About;
