import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const About: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  const { locale, locales, push } = useRouter();

  const { t: translate } = useTranslation("index");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <h2>Sou a pagina about</h2>
      <h2>{translate("header.title")}</h2>
      <h2>{translate("header.subtitle")}</h2>
      {locale}
      {locales?.map((lang) => {
        return (
          <Link href={"/"} locale={lang}>
            Go back {lang}
          </Link>
        );
      })}
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index"])),
    }, // will be passed to the page component as props
  };
}

export default About;
