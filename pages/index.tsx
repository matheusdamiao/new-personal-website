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
import Hero from "../components/Hero";

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
      <Hero />
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
