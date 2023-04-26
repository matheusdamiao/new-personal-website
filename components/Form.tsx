import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { motion } from "framer-motion";

const Form = () => {
  const { t: translate } = useTranslation("index");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);

    try {
      const res = await axios.post("/api/form", {
        formData,
      });
      if (res.status === 200) {
        setTimeout(() => {
          setIsLoading(false);
          setIsSent(true);
        }, 2000);

        console.log("Tudo certo com o POST");
      } else {
        console.log("Deu erro no Post");
      }
    } catch (e) {
      console.log(e);
    }

    setFormData({ name: "", email: "", text: "" });
    setTimeout(() => {
      setIsSent(false);
    }, 10000);
  };

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div
        id="contact"
        className="flex flex-col w-full md:h-full lg:h-full items-start md:px-44 px-9 pb-40 pt-20 dark:bg-darkBlack bg-white "
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring" }}
          className="flex justify-start items-center gap-3 w-full"
        >
          <h2 className="font-Source text-4xl md:text-7xl tracking-[6.5%] transform hover:text-darkOrange hover:translate-x-2 transition duration-300">
            {translate("contact.title")}
          </h2>
        </motion.div>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring" }}
          className="w-full lg:mt-16 mt-20"
        >
          {translate("contact.text")}
        </motion.p>
        <motion.form
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring" }}
          method="POST"
          className="flex flex-col items-start gap-2 lg:pt-16 pt-10 max-w-xs w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="name"> Seu nome</label>
          <input
            className="pl-4 py-2 w-full border-[1px] focus:border-[2px] invalid:border-red-700 focus:outline-none rounded-2xl empty:border-darkOrange border-solid bg-transparent"
            type="text"
            name="name"
            value={formData.name}
            required
            placeholder="ex: João"
            onChange={(e) => handleInput(e)}
          />

          <label htmlFor="email">Seu e-mail ou telefone</label>
          <input
            className="pl-4 py-2 w-full  border-[1px] rounded-2xl border-darkOrange border-solid bg-transparent"
            type="email"
            required
            value={formData.email}
            placeholder="ex: matheus@gmail.com "
            name="email"
            onChange={(e) => handleInput(e)}
          />

          <label htmlFor="text">Mensagem</label>
          <textarea
            className="pl-4 py-2 w-full border-[1px] rounded-2xl border-darkOrange border-solid bg-transparent"
            placeholder="Seu texto aqui..."
            value={formData.text}
            name="text"
            onChange={(e) => handleInput(e)}
          />
          {/* <button
            type="submit"
            className="py-4 px-6 text-base dark:shadow-md shadow-md shadow-black dark:hover:shadow-none dark:border-none dark:shadow-black hover:shadow-none transition-shadow dark:text-darkBlack text-white font-bold rounded-2xl bg-[#29201d] dark:bg-white dark:border-2 mt-10"
          >
            Enviar mensagem
          </button> */}
          {isLoading ? (
            <button
              type="submit"
              disabled
              className="flex gap-2 py-4 px-6 text-base dark:shadow-md disabled:opacity-50 shadow-md shadow-black dark:hover:shadow-none dark:border-none dark:shadow-black hover:shadow-none transition-shadow dark:text-darkBlack text-white font-bold rounded-2xl bg-darkBlack dark:bg-white dark:border-2 mt-10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="0.75s"
                    values="0 12 12;360 12 12"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
              Enviando mensagem...
            </button>
          ) : !isSent ? (
            <button
              type="submit"
              className="py-4 px-6 text-base dark:shadow-md shadow-md shadow-black dark:hover:shadow-none dark:border-none dark:shadow-black hover:shadow-none transition-shadow dark:text-darkBlack text-white font-bold rounded-2xl bg-darkBlack dark:bg-white dark:border-2 mt-10"
            >
              Enviar mensagem
            </button>
          ) : (
            <button
              type="submit"
              disabled
              className="py-4 px-6 text-base dark:shadow-md disabled:opacity-50 shadow-md  shadow-black dark:hover:shadow-none dark:border-none dark:shadow-black hover:shadow-none transition-shadow dark:text-darkBlack text-white font-bold rounded-2xl bg-green-700 dark:bg-white dark:border-2 mt-10"
            >
              Mensagem enviada! <br />
              Obrigado pelo contato!
            </button>
          )}
        </motion.form>
      </div>
    </>
  );
};

export default Form;
