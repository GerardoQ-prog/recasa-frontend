import React from "react";
import AboutsUs from "../../src/infrastructure/components/aboutUs";
import Footer from "../../src/infrastructure/components/footer";
import Header from "../../src/infrastructure/components/header";

const Inmobiliaria = () => {
  return (
    <div>
      <Header />
      <picture width="100%">
        <source srcSet="./images/foto2_movil.png" media="(max-width: 768px)" />
        <img src="./images/foto2.png" alt="MDN" width="100%" />
      </picture>
      <AboutsUs />
      <Footer />
    </div>
  );
};

export default Inmobiliaria;
