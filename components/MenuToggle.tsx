import * as React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => {
  const { theme } = useTheme();

  return (
    <button className="absolute top-7 right-4 z-20" onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          stroke={theme === "dark" ? "hsl(17, 51%, 61%)" : "black"}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          stroke={theme === "dark" ? "hsl(17, 51%, 61%)" : "black"}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          stroke={theme === "dark" ? "hsl(17, 51%, 61%)" : "black"}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
