import { Grid } from "@mui/material";
import React from "react";
import { COLORS } from "../../assets/styles";
import Layout from "../layout";
import TextStyle from "../textStyle";
import { Title } from "../titles";

const dataServices = [
  {
    title: "DISEÑO Y ARQUITECTURA",
    text: "Nuestro equipo de trabajo tiene por objetivo generar propuestas e ideas para la creación y realización de espacios físicos enmarcado dentro de la arquitectura. En esta escala del diseño intervienen factores como los geométrico-espaciales; higiénico-constructivo y estético-formales para la satisfacción de nuestros clientes.",
    img: "/images/service1.jpeg",
  },
  {
    title: "INTERMEDIACIÓN INMOBILIARIA",
    text: "Somos tus socios Inmobiliarios, recibimos todos los requerimientos del mercado y los  atendemos rápidamente para apoyarte de forma eficiente en tu proceso de compra, venta o alquiler de tu inmueble. Además, te brindamos un respaldo legal y asesoramiento integral.  Trabajamos con todo tipo de inmuebles: Departamentos, Casas, Locales Comerciales, Locales Industriales, Terrenos, etc.",
    img: "/images/service2.jpeg",
  },
  {
    title: "CONSTRUCCIÓN Y REMODELACIÓN",
    text: "La creatividad y eficiencia de nuestro equipo de profesionales brinda constantemente diseños sólidos, responsables y de alta viabilidad financiera para dar solución a los requerimientos de nuestros clientes.",
    img: "/images/service3.jpeg",
  },
  {
    title: "ADMINISTRACIÓN DE EDIFICIOS, CONDOMINIOS Y CUIDADO DE INMUEBLES",
    text: "Contamos con la mejor Gestion Administrativa, Operativa y de Recursos Humanos para tu edificio o condominio.  Usando software y control  de calidad Six Sigma para nuestras operaciones.  También, te brindamos el servicio de cuidado de propiedades de manera presencial con la intención de mantener en condiciones óptimas tu hogar y tus mascotas en caso viajes o requiera nuestro servicio.",
    img: "/images/service4.jpeg",
  },
  {
    title: "FONDO DE INVERSIÓN INMOBILIARIA",
    text: "Invierte con nosotros y gana alta rentabilidad con las transacciones que realizamos como empresa en la construcción, compra y  venta  de inmuebles. Un ejecutivo de  RECASA te asesorará desde el inicio para que de forma comparativa veas tu inversión crecer mucho más que en un fondo de ahorros tradicional.",
    img: "/images/service5.jpeg",
  },
];

const Services = () => {
  return (
    <Layout>
      <div style={{ margin: "20px 0px" }}>
        <Title background={COLORS.RED} color={COLORS.WHITE}>
          Nuestros Servicios
        </Title>
        {dataServices.map((item, index) => {
          return (
            <Grid container style={{ margin: "50px 0px" }} key={index}>
              <Grid item xs={12} md={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "0px 0px 15px 0px",
                  }}
                >
                  <img src={item.img} alt="img_service" />
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <TextStyle
                  color={COLORS.BLACK}
                  bold={500}
                  type="h1"
                  margin="0px 0px 20px 0px"
                >
                  {item.title}
                </TextStyle>
                <TextStyle bold={400} type="h3">
                  {item.text}
                </TextStyle>
              </Grid>
            </Grid>
          );
        })}
      </div>
    </Layout>
  );
};

export default Services;
