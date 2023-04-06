import React from "react";
import { useRouter } from "next/router";

type Language = {
  locales: string[] | undefined;
};

const ToggleLanguage = ({ locales }: Language): JSX.Element => {
  const { locale, push } = useRouter();

  const changeLocale = (lang: string): Promise<boolean> => {
    return push("/", undefined, { locale: lang });
  };
  return (
    <div className="">
      {locales?.map((lang) => {
        return (
          <button className="p-2 uppercase" onClick={() => changeLocale(lang)}>
            {lang}
          </button>
        );
      })}
    </div>
  );
};

export default ToggleLanguage;
