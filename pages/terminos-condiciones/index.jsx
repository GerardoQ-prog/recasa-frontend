import React from "react";
import { COLORS } from "../../src/infrastructure/assets/styles";
import Footer from "../../src/infrastructure/components/footer";
import Header from "../../src/infrastructure/components/header";
import Layout from "../../src/infrastructure/components/layout";
import TextStyle from "../../src/infrastructure/components/textStyle";
import { Title } from "../../src/infrastructure/components/titles";
import { NextSeo } from "next-seo";
import { PageSeo } from "../../next-seo.config";

const TerminosCondiciones = () => {
  const SEO = PageSeo({
    url: "/terminos-condiciones",
    title: "Recasa - Términos y condiciones",
    description: "Términos y condiciones de Recasa",
  });

  return (
    <div>
      <NextSeo {...SEO} />
      <Header />
      <Layout>
        <Title background={COLORS.RED} color={COLORS.WHITE}>
          TÉRMINOS Y CONDICIONES
        </Title>
        <TextStyle margin="30px 0px 10px 0px" lineHeight={34}>
          Cada Oficina es de Propiedad y Operación Independiente. la marca y el
          logotipo RECASA esta registrado en INDECOPI así como sus procesos.
          RECASA, no es responsable por la exactitud o complementos de la
          información de los Afiliados, de los asesores y de las propiedades y
          de otra información provista por los usuarios de este sitio. La
          información puede cambiar sin previo aviso. La opinión de algunos
          artículos es responsabilidad de sus autores y han sido publicados solo
          para fines informativos y no expresa el punto de vista de RECASA -
          FRANQUICIA INMOBILIARIA.
        </TextStyle>
      </Layout>
      <Footer />
    </div>
  );
};

export default TerminosCondiciones;
