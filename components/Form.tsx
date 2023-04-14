import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t: translate } = useTranslation("index");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", text: "" });
    alert(`Obrigado, ${formData.name}! Logo mais já te respondo :) `);
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
    <div
      id="contact"
      className="flex flex-col w-full md:h-full lg:h-full items-start md:px-44 px-9 py-40 dark:bg-darkBlack bg-white "
    >
      <div className="flex justify-start items-center gap-3 w-full">
        <h2 className="font-Source text-5xl md:text-7xl tracking-[6.5%] transform hover:text-darkOrange hover:translate-x-2 transition duration-300">
          {translate("contact.title")}
        </h2>
      </div>
      <p className="w-full lg:mt-16 mt-20">{translate("contact.text")}</p>
      <form
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
        <button
          className="w-full text-darkOrange dark:border-[2px] px-2 py-4 mt-4 rounded-2xl dark:border-darkOrange dark:bg-transparent bg-[#D9D2CF] shadow-xl hover:shadow-none transition-shadow dark:shadow-2xl"
          type="submit"
        >
          {" "}
          Enviar mensagem
        </button>
      </form>
    </div>
  );
};

export default Form;
