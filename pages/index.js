import Head from "next/head";
import Carousel from "../src/infrastructure/components/carousel";
import Footer from "../src/infrastructure/components/footer";
import Header from "../src/infrastructure/components/header";
import ServicesHome from "../src/infrastructure/components/servicesHome";
import Statistics from "../src/infrastructure/components/statistics";
import Testimonials from "../src/infrastructure/components/testimonials";
import WhatsappButton from "../src/infrastructure/components/whatsappButton";

const dataCarousel = [
  {
    img: "./images/foto1.png",
    imgMobile: "./images/foto1_movil.png",
    title: "Introducir titulo aquí",
    description:
      "Lorem LoremLoremLoremLoremLoremLorem LoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLorem",
    nameSlide: "Proyecto 1",
    textButton: "Ver",
  },
  {
    img: "./images/foto2.png",
    imgMobile: "./images/foto2_movil.png",
    title: "Introducir titulo aquí",
    description:
      "Lorem LoremLoremLoremLoremLoremLorem LoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLorem",
    nameSlide: "Proyecto 1",
  },
  {
    img: "./images/foto3.png",
    imgMobile: "./images/foto3_movil.png",
    title: "Introducir titulo aquí",
    description:
      "Lorem LoremLoremLoremLoremLoremLorem LoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLorem",
    nameSlide: "Proyecto 1",
    textButton: "Ver",
  },
];

export const dataServices = [
  {
    text: "¿Deseas saber el valor de tu propiedad? Solicita una tasación.",
    background: "#fbf384",
    image: "./images/foto_calculadora.png",
  },
  {
    text: "Puede ser dueño de una propiedad sin comprarla por completo.",
    background: "#e3f0ff",
    image: "./images/foto_edificio1.png",
  },
  {
    text: "Vende/Alquila tu propiedad rápido y sin complicaciones.",
    background: "#c0c7fe",
    image: "./images/foto_casa.png",
  },
  {
    text: "Deseas realizar una remodelación o transformar espacios.",
    background: "#e5fff4",
    image: "./images/foto_remodelacion.png",
  },
  {
    text: "Te ayudamos con la Administración de inmuebles para maximizar su rentabilidad.",
    background: "#eeeff9",
    image: "./images/foto_administracion.png",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Recasa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Carousel dataCarousel={dataCarousel} />
      <ServicesHome dataServices={dataServices} />
      <Statistics />
      <Testimonials />
      <WhatsappButton></WhatsappButton>
      <Footer />
    </div>
  );
}
