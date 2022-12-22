import React from "react";
import { PageSeo } from "../../next-seo.config";
import AboutsUs from "../../src/infrastructure/components/aboutUs";
import Footer from "../../src/infrastructure/components/footer";
import Header from "../../src/infrastructure/components/header";
import WhatsappButton from "../../src/infrastructure/components/whatsappButton";
import { NextSeo } from "next-seo";

const Inmobiliaria = () => {
  const SEO = PageSeo({
    url: "/inmoboliaria",
    title: "Recasa - Inmobiliaria",
    description: "Sobre nosotros ¿Qué es Recasa?",
  });
  return (
    <div>
      <NextSeo {...SEO} />
      <Header />
      <picture width="100%">
        <source srcSet="./images/foto2_mobile.png" media="(max-width: 768px)" />
        <img
          src="./images/foto2_desktop.png"
          alt="Foto inmobiliaria"
          width="100%"
        />
      </picture>
      <AboutsUs />
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Inmobiliaria;
