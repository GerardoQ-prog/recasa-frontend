import React from "react";
import { PageSeo } from "../../next-seo.config";
import { NextSeo } from "next-seo";
import Footer from "../../src/infrastructure/components/footer";
import Header from "../../src/infrastructure/components/header";
import Services from "../../src/infrastructure/components/services";
import WhatsappButton from "../../src/infrastructure/components/whatsappButton";

const ServicesPage = () => {
  const SEO = PageSeo({
    url: "/servicios",
    title: "Recasa - Servicios",
    description: "Servicios que brinda Recasa",
  });

  return (
    <div>
      <NextSeo {...SEO} />
      <Header />
      <Services />
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default ServicesPage;
