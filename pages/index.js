import { PageSeo } from "../next-seo.config";
import { NextSeo } from "next-seo";
import Carousel from "../src/infrastructure/components/carousel";
import Footer from "../src/infrastructure/components/footer";
import Header from "../src/infrastructure/components/header";
import ServicesHome from "../src/infrastructure/components/servicesHome";
import Statistics from "../src/infrastructure/components/statistics";
import Testimonials from "../src/infrastructure/components/testimonials";
import WhatsappButton from "../src/infrastructure/components/whatsappButton";

const dataCarousel = [
  {
    img: "./images/foto1_desktop.png",
    imgMobile: "./images/foto1_mobile.png",
    title: "Introducir titulo aquí",
    description:
      "Lorem LoremLoremLoremLoremLoremLorem LoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLorem",
    nameSlide: "Proyecto 1",
    textButton: "Ver",
  },
  {
    img: "./images/foto2_desktop.png",
    imgMobile: "./images/foto2_mobile.png",
    title: "Introducir titulo aquí",
    description:
      "Lorem LoremLoremLoremLoremLoremLorem LoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLorem",
    nameSlide: "Proyecto 2",
  },
  {
    img: "./images/foto3_desktop.png",
    imgMobile: "./images/foto3_mobile.png",
    title: "Introducir titulo aquí",
    description:
      "Lorem LoremLoremLoremLoremLoremLorem LoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLorem",
    nameSlide: "Proyecto 3",
    textButton: "Ver",
  },
];

export const dataServices = [
  {
    text: "¿Deseas saber el valor de tu propiedad? Solicita una tasación.",
    background: "#fbf384",
    image: "./images/calculadora.png",
    link: "Solicítalo aquí",
  },
  {
    text: "Puede ser dueño de una propiedad sin comprarla por completo.",
    background: "#e3f0ff",
    image: "./images/edificio1.png",
    link: "Informes aquí",
  },
  {
    text: "Vende/Alquila tu propiedad rápido y sin complicaciones.",
    background: "#c0c7fe",
    image: "./images/edificio2.png",
    link: "Informes aquí",
  },
  {
    text: "Deseas realizar una remodelación o transformar espacios.",
    background: "#e5fff4",
    image: "./images/remodelar.png",
    link: "Solicítalo aquí",
  },
  {
    text: "Te ayudamos con la Administración de inmuebles para maximizar su rentabilidad.",
    background: "#eeeff9",
    image: "./images/edificio3.png",
    link: "Informes aquí",
  },
];

export default function Home() {
  const SEO = PageSeo({
    url: "/",
    title: "Recasa - Inicio",
    description: "Bienvenido a Recasa",
  });

  return (
    <div>
      <NextSeo {...SEO} />
      <Header />
      <Carousel dataCarousel={dataCarousel} />
      <ServicesHome dataServices={dataServices} />
      <Statistics />
      <Testimonials />
      <WhatsappButton />
      <Footer />
    </div>
  );
}
