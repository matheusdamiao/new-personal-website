import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import brazil from "./../assets/icons/brazil.svg";
import usa from "./../assets/icons/usa.svg";

type Language = {
  locales: string[] | undefined;
};

const ToggleLanguage = ({ locales }: Language): JSX.Element => {
  const { locale, push } = useRouter();

  const buttonUsa = {
    opacity: `${locale === "en" ? "1" : "0.2"}`,
  };

  const buttonBrazil = {
    opacity: `${locale === "pt" ? "1" : "0.2"}`,
  };

  console.log(locale);

  const changeLocale = (lang: string): Promise<boolean> => {
    return push("/", undefined, { locale: lang });
  };
  return (
    <div className="flex justify-center items-center">
      {locales?.map((lang) => {
        return (
          <button
            key={lang}
            className="p-2 uppercase"
            onClick={() => changeLocale(lang)}
          >
            {lang === "pt" ? (
              <Image src={brazil} style={buttonBrazil} alt="" width={20} />
            ) : (
              <Image src={usa} alt="" style={buttonUsa} width={20} />
            )}
          </button>
        );
      })}
    </div>

    // <div className="z-10">
    //   {locales
    //     ?.filter((lang) => lang !== locale)
    //     .map((l) => {
    //       return (
    //         <button
    //           key={l}
    //           className="p-2 uppercase"
    //           onClick={() => changeLocale(l)}
    //         >
    //           {/* <Image
    //             src={l === "pt" ? brazil : usa}
    //             alt=""
    //             width={25}
    //             height={25}
    //           /> */}
    //           {l === "pt" ? "PT" : "EN"}
    //         </button>
    //       );
    //     })}
    // </div>
  );
};

export default ToggleLanguage;
