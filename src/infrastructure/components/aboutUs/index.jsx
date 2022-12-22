import React from "react";
import { COLORS } from "../../assets/styles";
import Layout from "../layout";
import TextStyle from "../textStyle";
import { Title } from "../titles";

const AboutsUs = () => {
  return (
    <Layout>
      <Title background={COLORS.TEXT} color={COLORS.WHITE} width="300px">
        Nosotros
      </Title>
      <br></br>
      <TextStyle type="h3" bold={400}>
        Somos una franquicia inmobiliaria con más de 5 años en el mercado.
        Conocemos los requerimientos y las necesidades de nuestros clientes.
        Entendemos el entorno cambiante en el que se desarrolla y por ello, el
        diseño de nuestro Servicio Integral se caracteriza por ser altamente
        personalizado, profesional, exclusivo y efectivo. Te garantizamos dar
        soluciones concretas a tu necesidad inmobiliaria: Diseña, Remodela,
        Construye, Alquila, Compra y Vende, más rápido con recasa.
      </TextStyle>
      <br></br>
      <br></br>
      <Title background={COLORS.TEXT} color={COLORS.WHITE} width="300px">
        Misión
      </Title>
      <TextStyle type="h3" bold={400}>
        Ser reconocidos por dar un servicio de alta calidad, ético y
        comprometidos con la satisfacción y objetivos de nuestros clientes en el
        alquiler, compra, venta, restauración, habilitación de inmuebles, diseño
        y construcción.
      </TextStyle>
      <br></br>
      <br></br>
      <Title background={COLORS.TEXT} color={COLORS.WHITE} width="300px">
        Visión
      </Title>
      <TextStyle type="h3" bold={400}>
        Ser una excelente alternativa en el desarrollo inmobiliario y aportar
        tecnología e innovación en el mercado.
      </TextStyle>
      <br></br>
      <br></br>
      <Title background={COLORS.TEXT} color={COLORS.WHITE} width="300px">
        Servicios
      </Title>
      <ul>
        <li>
          <TextStyle type="h3" bold={400}>
            Valuación – Tasación de Propiedades
          </TextStyle>
        </li>
        <br />
        <li>
          <TextStyle type="h3" bold={400}>
            Alquiler, Compra y Venta de Propiedades
          </TextStyle>
        </li>
        <br />
        <li>
          <TextStyle type="h3" bold={400}>
            Asesoría Legal
          </TextStyle>
        </li>
        <br />
        <li>
          <TextStyle type="h3" bold={400}>
            Administración y cuidado de Propiedades
          </TextStyle>
        </li>
        <br />
        <li>
          <TextStyle type="h3" bold={400}>
            Asesoría en rectificaciones y saneamiento
          </TextStyle>
        </li>
        <br />
        <li>
          <TextStyle type="h3" bold={400}>
            Diseño de interiores, Construcción y Remodelación
          </TextStyle>
        </li>
        <br />
        <li>
          <TextStyle type="h3" bold={400}>
            Marketing y Publicidad Inmobiliaria
          </TextStyle>
        </li>
        <br />
        <li>
          <TextStyle type="h3" bold={400}>
            Fondo de Inversión Inmobiliaria
          </TextStyle>
        </li>
      </ul>
      <br></br>
      <br></br>
      <Title background={COLORS.TEXT} color={COLORS.WHITE} width="300px">
        Contacto
      </Title>
      <TextStyle type="h3" bold={400}>
        <b>Sede: </b> Av. José Pardo 223, Piso 10 – Miraflores.
      </TextStyle>
      <br></br>
      <TextStyle type="h3" bold={400}>
        <b>Telefonos: </b> <a href="tel:+51979755720">979755720</a> /{" "}
        <a href="tel:+51984381147">984381147</a>
      </TextStyle>
      <br></br>
      <TextStyle type="h3" bold={400}>
        <b>Email: </b>{" "}
        <a href="mailto:se.cardenas@recasainmobiliaria.com">
          se.cardenas@recasainmobiliaria.com{" "}
        </a>
        /{" "}
        <a href="mailto:ra.cardenas@recasainmobiliaria.com">
          ra.cardenas@recasainmobiliaria.com{" "}
        </a>
      </TextStyle>
      <br></br>
      <br></br>
      <Title background={COLORS.TEXT} color={COLORS.WHITE} width="300px">
        Ubicación
      </Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0px",
        }}
      >
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Av.%20Jos%C3%A9%20Pardo%20223%20%E2%80%93%20Miraflores.&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </Layout>
  );
};

export default AboutsUs;
