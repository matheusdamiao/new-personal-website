import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import SocialMedia from "../components/SocialMedia";
import Form from "../components/Form";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps({ locale }: { locale: string }) {
  try {
    await clientPromise;
    return {
      props: {
        isConnected: true,
        ...(await serverSideTranslations(locale, ["common", "index"])),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

const Home = ({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { locale, locales, push } = useRouter();

  const [mounted, setMounted] = useState(false);
  const { t: translate } = useTranslation("index");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!isConnected) {
    return (
      <h1>
        Ops! Ocorreu um problema na conexão com o servidor. Tente novamente mais
        tarde
      </h1>
    );
  }

  return (
    <>
      <Menu locales={locales} />
      <SocialMedia />
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
          {locales
            ?.filter((loc) => loc === locale)
            .map((l) => (
              <a
                key={l}
                className="text-lg shadow-xl hover:shadow-none transition-shadow text-lightOrange rounded-2xl bg-[#D9D2CF] dark:bg-transparent dark:border-solid dark:border-2 py-[23px] px-[35px] mt-10 border-orange-400"
                href="#contact"
              >
                {translate("header.button")}
              </a>
            ))}
        </div>
      </div>
      <Services />
      <Projects />
      <About />
      <Form />
    </>
  );
};

// Initially, I used getStaticProps to render my translation. But as I needed a getServerSideProps
// to connect to MongoDB, and moved this code to my serversideprops above
//
// export async function getStaticProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "index"])),
//     }, // will be passed to the page component as props
//   };
// }

export default Home;
