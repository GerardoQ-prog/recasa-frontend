import React from "react";
import { ContainerMain } from "./styled";

const WhatsappButton = () => {
  return (
    <ContainerMain>
      <a
        href="https://wa.me/send/?phone=51979755720&text=Hola.+ReCasa+deseo+comunicarme+con+ustedes."
        target="_blank"
      >
        <img src="/images/whatsapp.svg" alt="whatsapp button" />
      </a>
    </ContainerMain>
  );
};

export default WhatsappButton;
