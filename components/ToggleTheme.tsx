import React from "react";
import { useTheme } from "next-themes";
const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "sytem" ? systemTheme : theme;

  return (
    <button
      className="p-2"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
};

export default ToggleTheme;
