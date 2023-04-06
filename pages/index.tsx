import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Link from "next/link";
import ToggleLanguage from "../components/ToggleLanguage";
import ToggleTheme from "../components/ToggleTheme";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  const { locale, locales, push } = useRouter();

  const changeLocale = (lang: string): Promise<boolean> => {
    return push("/", undefined, { locale: lang });
  };

  const [mounted, setMounted] = useState(false);
  const { t: translate } = useTranslation("index");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Menu locales={locales} />
      <div className="pl-10 lg:pl-0 w-full h-screen flex-col flex items-center justify-center bg-white dark:bg-lightBlack ">
        <div className="flex flex-col items-start">
          <h4 className="text-lg text-lightOrange dark:text-lightOrange ">
            {translate("header.title")}
          </h4>
          <h1 className="text-6xl font-bold text-lightBlack dark:text-white py-6">
            Matheus Damião
          </h1>

          <h2 className="text-darkGray dark:text-lightGray text-2xl max-w-[900px] pr-14 sm:pr-0">
            {translate("header.body")}
          </h2>
          <button className="text-lg shadow-xl hover:shadow-none transition-shadow text-lightOrange rounded-2xl bg-[#D9D2CF] dark:bg-transparent dark:border-solid dark:border-2 py-[23px] px-[35px] mt-10 border-orange-400  ">
            {translate("header.button")}
          </button>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index"])),
    }, // will be passed to the page component as props
  };
}

export default Home;
