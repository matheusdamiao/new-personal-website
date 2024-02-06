import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Language } from "./Menu";
import { useRouter } from "next/router";
import bg from "./../assets/images/bg-hero.png";
import Profile from "./Profile";

const Hero = () => {
  const { t: translate } = useTranslation("index");
  const { locale } = useRouter();

  const ref = useRef(null);

  const corrente = useRef(null);

  const ScrollDown = useScroll({
    target: ref,
  });

  const scrollDown = useTransform(ScrollDown.scrollY, [0, 100], [0, 150], {});

  const titleRef = useRef(null);

  const { scrollY } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollY, [0, 900], ["0%", "100%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const title = translate("header.title");

  useEffect(() => {
    modifyTitleColor(title);
  }, [title]);

  function modifyTitleColor(phrase) {
    var words = phrase.split(" ");
    // Edit the color of the third word

    if (locale === "pt") {
      words[2] = `<span style="color:#FF7038;"> ${words[2]} </span>`;
    } else {
      words[1] = `<span style="color:#FF7038;"> ${words[1]} </span>`;
    }

    // Join the words back into a string
    var editedPhrase = words.join(" ");

    console.log(editedPhrase);

    if (titleRef.current) {
      titleRef.current.innerHTML = editedPhrase;
    }

    return editedPhrase;
  }

  return (
    <>
      <div
        id="hero"
        className="relative pt-0 w-full h-[100svh] md:h-screen flex-col flex items-start px-9 lg:px-44 justify-center bg-white  dark:bg-lightBlack"
      >
        <img
          src={bg.src}
          className="absolute object-left top-0 left-0 object-cover w-full h-screen"
          alt=""
        />
        <motion.div
          className="flex flex-col items-center z-10 w-full justify-between h-[50svh] lg:h-[40svh]"
          ref={ref}
          style={{ y, opacity }}
        >
          <div className="flex items-center justify-center flex-wrap gap-2">
            <div className="">
              <motion.span
                initial={{ y: -50, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                // style={{ y }}
                ref={titleRef}
                className=" text-6xl text-center md:text-[80px] font-semibold  text-darkBlack dark:text-[#CFCFCF] "
              >
                {/* {translate("header.title")} */}
              </motion.span>
              <span className="text-[#FF7038] text-6xl lg:text-8xl self-end">
                .
              </span>
            </div>
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className=" md:text-2xl lg:w-[68%] text-left lg:text-center font-normal text-darkBlack dark:text-white "
            >
              {translate("header.subtitle")}
            </motion.div>
          </div>

          <Profile bio={translate("header.bio")} />
        </motion.div>
      </div>

      <motion.svg
        className="absolute bottom-[20vh] md:bottom-0 hidden md:block left-[48%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.path
          d="M0 0 L30 32 L60 0"
          className="fill-none stroke-darkGray stroke-[3px] "
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 50, opacity: [1, 0.5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            delay: 1,
          }}
        />
        <motion.path
          d="M0 0 L30 32 L60 0"
          className="fill-none stroke-darkOrange stroke-[3px]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 50, opacity: [1, 0.5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            delay: 1.8,
          }}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[1vh] left-[40%] w-[100px] md:hidden block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.path
          d="M35 0 L50 15 L65 0"
          className="fill-none stroke-darkGray stroke-[3px] "
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 50, opacity: [1, 0.5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            delay: 1,
          }}
        />
        <motion.path
          d="M35 0 L50 15 L65 0"
          className="fill-none stroke-darkOrange stroke-[3px]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 50, opacity: [1, 0.5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            delay: 2,
          }}
        />
      </motion.svg>
    </>
  );
};

export default Hero;
