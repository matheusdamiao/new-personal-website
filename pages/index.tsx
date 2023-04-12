import type { NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";

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
      <div className="pl-10 pr-3 pt-12 w-full h-screen flex-col flex items-start px-9 lg:px-44 justify-center bg-white dark:bg-lightBlack">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap gap-2">
            <p className="text-base md:text-xl text-lightOrange dark:text-lightOrange ">
              {translate("header.title")}
            </p>
            <p className="text-base md:text-xl text-darkBlack dark:text-white ">
              {translate("header.subtitle")}
            </p>
          </div>

          <h2 className="text-5xl sm:text-6xl leading-[4rem] md:leading-[4rem] font-regular text-darkBlack dark:text-white py-3 max-w-[1200px] pr-2 sm:pr-0 ">
            {translate("header.body")}
          </h2>
          <button className="text-lg shadow-xl hover:shadow-none transition-shadow text-lightOrange rounded-2xl bg-[#D9D2CF] dark:bg-transparent dark:border-solid dark:border-2 py-[23px] px-[35px] mt-10 border-orange-400  ">
            {translate("header.button")}
          </button>
        </div>
      </div>
      <Services />
      <Projects />
      <About />
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
