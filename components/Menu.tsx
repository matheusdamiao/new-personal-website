import React from "react";
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";
import logo from "./../assets/images/logo_md.svg";
import logoWhite from "./../assets/images/logoWhite.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, useCycle } from "framer-motion";
import { useRouter } from "next/router";
import { MenuToggle } from "./MenuToggle";

export type Language = {
  locales: string[] | undefined;
};

const Menu = ({ locales }: Language) => {
  const { theme } = useTheme();
  const { locale } = useRouter();

  const sidebar = {
    open: (height = 3000) => ({
      opacity: 0.8,
      clipPath: `circle(${2000 * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 10,
        restDelta: 2,
      },
    }),
    closed: {
      opacity: 0,
      clipPath: "circle(40px at 40px 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.div
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="flex items-center z-50 justify-between w-full px-10 py-3 fixed bg-white dark:bg-lightBlack bg-opacity-50 backdrop-blur-sm dark:bg-opacity-50"
      >
        <Image alt="" src={theme === "dark" ? logo : logoWhite} width={80} />
        <div className="">
          <ul className="hidden lg:flex justify-evenly items-center gap-12 dark:text-lightGray text-lightGray">
            <li className="flex group items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition duration-200 group-hover:-scale-x-[10] w-1 h-1 bg-red-300 absolute top-16" />
              <a
                className="dark:group-hover:text-white group-hover:text-lightBlack transition duration-200"
                href={locale === "pt" ? "/" : "/en"}
              >
                Home
              </a>
            </li>
            <li className="flex group items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition duration-200 group-hover:-scale-x-[10] w-1 h-1 bg-red-300 absolute top-16" />

              <a
                className="dark:group-hover:text-white group-hover:text-lightBlack transition duration-200"
                href={locale === "pt" ? "#services" : "#services"}
              >
                {locale === "pt" ? "Serviços" : "Services"}
              </a>
            </li>
            <li className="flex group items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition duration-200 group-hover:-scale-x-[10] w-1 h-1 bg-red-300 absolute top-16" />

              <a
                className="dark:group-hover:text-white group-hover:text-lightBlack transition duration-200"
                href={locale === "pt" ? "/#projects" : "#projects"}
              >
                {locale === "pt" ? "Projetos" : "Projects"}
              </a>
            </li>
            <li className="flex group items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition duration-200 group-hover:-scale-x-[10] w-1 h-1 bg-red-300 absolute top-16" />

              <a
                className="dark:group-hover:text-white group-hover:text-lightBlack transition duration-200"
                href={locale === "pt" ? "/#about" : "#about"}
              >
                {" "}
                {locale === "pt" ? "Sobre" : "About"}
              </a>
            </li>
            <li className="flex group items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition duration-200 group-hover:-scale-x-[10] w-1 h-1 bg-red-300 absolute top-16" />

              <a
                className="dark:group-hover:text-white group-hover:text-lightBlack transition duration-200"
                href={locale === "pt" ? "/#contact" : "#contact"}
              >
                {" "}
                {locale === "pt" ? "Contato" : "Contact"}
              </a>
            </li>
          </ul>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="w-full lg:hidden h-full absolute left-0 top-0"
          >
            <motion.div
              className="bg-darkOrange opacity-40 w-full h-[400px] flex items-center flex-col justify-evenly"
              variants={sidebar}
            >
              <a
                className="text-white font-bold text-2xl"
                href={locale === "pt" ? "/" : "/en"}
              >
                Home
              </a>

              <a
                className="text-white font-bold text-2xl"
                href={locale === "pt" ? "#services" : "#services"}
              >
                Services
              </a>

              <a
                className="text-white font-bold text-2xl"
                href={locale === "pt" ? "/#projects" : "#projects"}
              >
                Projects
              </a>

              <a
                className="text-white font-bold text-2xl"
                href={locale === "pt" ? "/#about" : "#about"}
              >
                About
              </a>

              <a
                className="text-white font-bold text-2xl"
                href={locale === "pt" ? "/#contact" : "#contact"}
              >
                Contact
              </a>
            </motion.div>
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
        <div className="flex">
          <ToggleLanguage locales={locales} />

          <ToggleTheme />
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
