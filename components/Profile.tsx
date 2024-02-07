import React from "react";
import avatar from "./../assets/images/avatar-matheus.webp";
import { motion } from "framer-motion";
const Profile = ({ bio }: { bio: string }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="text-darkBlack dark:text-white pt-10 flex gap-5 items-center justify-center "
    >
      <img src={avatar.src} alt="" className="w-[70px]" />
      <div className="w-[60%]">
        <h4 className="font-semibold dark:text-[#E2E2E2] text-darkBlack">
          Matheus Damião
        </h4>
        <h5 className="dark:text-[#CDCDCD] text-darkGray font-normal text-base">
          {bio}
        </h5>
      </div>
    </motion.div>
  );
};

export default Profile;
