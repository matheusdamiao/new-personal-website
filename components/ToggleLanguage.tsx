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

  const changeLocale = (lang: string): Promise<boolean> => {
    return push("/", undefined, { locale: lang });
  };
  return (
    // <div className="">
    //   {locales?.map((lang) => {
    //     return (
    //       <button
    //         key={lang}
    //         className="p-2 uppercase"
    //         onClick={() => changeLocale(lang)}
    //       >
    //         {lang === "pt" ? (
    //           <Image src={brazil} alt="" width={25} />
    //         ) : (
    //           <Image src={usa} alt="" width={25} />
    //         )}
    //       </button>
    //     );
    //   })}
    // </div>

    <div className="">
      {locales
        ?.filter((lang) => lang !== locale)
        .map((l) => {
          return (
            <button
              key={l}
              className="p-2 uppercase"
              onClick={() => changeLocale(l)}
            >
              <Image
                src={l === "pt" ? brazil : usa}
                alt=""
                width={25}
                height={25}
              />
            </button>
          );
        })}
    </div>
  );
};

export default ToggleLanguage;
