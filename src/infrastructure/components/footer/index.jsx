import Link from "next/link";
import React from "react";
import { COLORS } from "../../assets/styles";
import TextStyle from "../textStyle";
import {
  ContainerCertificate,
  ContainerCopy,
  ContainerFooter,
  ContainerSocial,
  ContainterGrid,
  Line,
} from "./styled";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <TextStyle color={COLORS.WHITE} bold={500} type="h3" textAlign="center">
          <PlaceIcon style={{ marginBottom: -5 }} /> Av. José Pardo 223, Piso 10
          Miraflores
        </TextStyle>
        <br />
        <TextStyle color={COLORS.WHITE} bold={500} type="h3" textAlign="center">
          <PhoneInTalkIcon style={{ marginBottom: -5 }} />{" "}
          <a href="tel:+51017481979">01 7481979</a>
        </TextStyle>
        <br />
        <TextStyle color={COLORS.WHITE} bold={500} type="h3" textAlign="center">
          <MarkunreadIcon style={{ marginBottom: -5 }} />{" "}
          <a href="mailto:hola@recasainmobiliaria.com">
            hola@recasainmobiliaria.com
          </a>
        </TextStyle>
        <ContainerSocial>
          <Link
            href="https://www.facebook.com/INMOBILIARIARECASA?mibextid=ZbWKwL"
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <img
                src="./images/ic_facebook.svg"
                width="30px"
                alt="icon_fb"
              ></img>
            </a>
          </Link>
          <Link href="https://www.instagram.com/recasainmobiliaria" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img
                src="./images/ic_instagram.svg"
                width="30px"
                alt="icon_ig"
              ></img>
            </a>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCNRzqPigRwlw2MqrSi4Zdpw"
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <img
                src="./images/ic_youtube.svg"
                width="30px"
                alt="icon_yt"
              ></img>
            </a>
          </Link>
        </ContainerSocial>
        <Line />
        <ContainterGrid>
          <Grid container>
            <Grid item xs={12} md={4}>
              <TextStyle color={COLORS.WHITE} bold={500} type="h3">
                Visita:
              </TextStyle>
              <br />
              <Link href={"/"}>
                <TextStyle
                  color={COLORS.WHITE}
                  bold={400}
                  type="h4"
                  cursor="pointer"
                >
                  Inicio
                </TextStyle>
              </Link>
              <Link href={"/inmobiliaria"}>
                <TextStyle
                  color={COLORS.WHITE}
                  bold={400}
                  type="h4"
                  cursor="pointer"
                >
                  Inmobiliaria
                </TextStyle>
              </Link>
              <Link href={"/inmobiliaria"}>
                <TextStyle
                  color={COLORS.WHITE}
                  bold={400}
                  type="h4"
                  cursor="pointer"
                >
                  Oficinas
                </TextStyle>
              </Link>
              <Link href={"/inmobiliaria"}>
                <TextStyle
                  color={COLORS.WHITE}
                  bold={400}
                  type="h4"
                  cursor="pointer"
                >
                  Asesores
                </TextStyle>
              </Link>
              <Link href={"/inmobiliaria"}>
                <TextStyle
                  color={COLORS.WHITE}
                  bold={400}
                  type="h4"
                  cursor="pointer"
                >
                  Franquicia
                </TextStyle>
              </Link>
            </Grid>
            <Grid item xs={12} md={8}>
              <ContainerCertificate>
                <div>
                  <TextStyle
                    color={COLORS.WHITE}
                    bold={500}
                    type="h4"
                    textAlign="center"
                  >
                    Registrado en :
                  </TextStyle>
                  <img src="/images/foto_min_vivienda.png" width="250px" />
                </div>
                <div>
                  <TextStyle
                    color={COLORS.WHITE}
                    bold={500}
                    type="h4"
                    textAlign="center"
                  >
                    Calificado en :
                  </TextStyle>
                  <img src="/images/foto_certificado_okr.webp" width="100px" />
                </div>
                <div>
                  <TextStyle
                    color={COLORS.WHITE}
                    bold={500}
                    type="h4"
                    textAlign="center"
                  >
                    Asociado a la :
                  </TextStyle>
                  <img src="/images/camara_comercio_lima.png" width="200px" />
                </div>
                <div>
                  <TextStyle
                    color={COLORS.WHITE}
                    bold={500}
                    type="h4"
                    textAlign="center"
                  >
                    Registrado en :
                  </TextStyle>
                  <img src="/images/indecopi.png" width="200px" />
                </div>
              </ContainerCertificate>
            </Grid>
          </Grid>
        </ContainterGrid>
      </ContainerFooter>
      <ContainerCopy>
        <TextStyle
          color={COLORS.WHITE}
          bold={400}
          size="12px"
          sizeMobile="12px"
          textAlign="center"
        >
          Copyright © {new Date().getFullYear()} RECASA |{" "}
          <Link href={"/terminos-condiciones"}>Terminos y condiciones</Link>
        </TextStyle>
      </ContainerCopy>
    </>
  );
};

export default Footer;
