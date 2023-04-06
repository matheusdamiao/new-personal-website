import React from "react";
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

type Language = {
  locales: string[] | undefined;
};

const Menu = ({ locales }: Language) => {
  return (
    <div className="flex items-end w-full justify-end">
      <ToggleLanguage locales={locales} />
      <ToggleTheme />
    </div>
  );
};

export default Menu;
