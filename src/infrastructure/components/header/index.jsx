import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { COLORS } from "../../assets/styles";
import TextStyle from "../textStyle";
import {
  ButtonAdviser,
  ContainerHeader,
  ContainerHeaderMobile,
  ContainerLinks,
  ContainerMenuMobile,
  ContainerSocial,
  ContainerTopHeader,
  SelectLink,
} from "./styled";

const Header = () => {
  const router = useRouter();

  const [showShadow, setShowShadow] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleShowShadow = () => {
    window.onscroll = function () {
      let y = window.scrollY;
      if (y >= 1000) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };
  };

  React.useEffect(() => {
    handleShowShadow();
  }, []);

  return (
    <>
      <ContainerTopHeader>
        <ContainerSocial>
          <TextStyle type="h4" bold={500} color={COLORS.WHITE}>
            Siguenos
          </TextStyle>
          <Link
            href="https://www.facebook.com/INMOBILIARIARECASA?mibextid=ZbWKwL"
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_facebook.svg" alt="icon_fb"></img>
            </a>
          </Link>
          <Link href="https://www.instagram.com/recasainmobiliaria" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_instagram.svg" alt="icon_ig"></img>
            </a>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCNRzqPigRwlw2MqrSi4Zdpw"
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_youtube.svg" alt="icon_yt"></img>
            </a>
          </Link>
        </ContainerSocial>
        <ButtonAdviser>Ser asesor</ButtonAdviser>
      </ContainerTopHeader>
      <ContainerHeader showShadow={showShadow}>
        <Link href="/">
          <img src="./images/logo_recasa.svg" alt="logo_recasa" />
        </Link>
        <ContainerLinks>
          <Link href="/">
            <SelectLink isSelected={router.pathname === "/"}>
              <TextStyle
                color={router.pathname === "/" ? COLORS.WHITE : COLORS.TEXT}
                type="h3"
                bold={500}
                cursor="pointer"
              >
                Inicio
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/inmobiliaria">
            <SelectLink isSelected={router.pathname.includes("inmobiliaria")}>
              <TextStyle
                color={
                  router.pathname.includes("inmobiliaria")
                    ? COLORS.WHITE
                    : COLORS.TEXT
                }
                type="h3"
                bold={500}
                cursor="pointer"
              >
                Inmobiliaria
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/servicios">
            <SelectLink isSelected={router.pathname.includes("servicios")}>
              <TextStyle
                color={
                  router.pathname.includes("servicios")
                    ? COLORS.WHITE
                    : COLORS.TEXT
                }
                type="h3"
                bold={500}
                cursor="pointer"
              >
                Servicios
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle
                color={COLORS.TEXT}
                type="h3"
                bold={500}
                cursor="pointer"
              >
                Oficina
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle
                color={COLORS.TEXT}
                type="h3"
                bold={500}
                cursor="pointer"
              >
                Asesores
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle
                color={COLORS.TEXT}
                type="h3"
                bold={500}
                cursor="pointer"
              >
                Franquicia
              </TextStyle>
            </SelectLink>
          </Link>
        </ContainerLinks>
      </ContainerHeader>
      <ContainerHeaderMobile>
        <Link href={"/"}>
          <img src="./images/logo_recasa.svg" alt="logo_Recasa" />
        </Link>
        <div>
          <ButtonAdviser>Ser asesor</ButtonAdviser>
          {openMenu ? (
            <img
              src="./images/ic_close.svg"
              alt="icon_close"
              style={{ margin: "0px 0px 0px 10px" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          ) : (
            <img
              src="./images/ic_burger.svg"
              alt="icon_burger"
              style={{ margin: "0px 0px 0px 10px" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </div>
      </ContainerHeaderMobile>
      <ContainerMenuMobile openMenu={openMenu}>
        <ContainerLinks>
          <Link href="/">
            <SelectLink isSelected={router.pathname === "/"}>
              <TextStyle
                color={router.pathname === "/" ? COLORS.WHITE : COLORS.TEXT}
                type="h3"
                bold={500}
              >
                Inicio
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/inmobiliaria">
            <SelectLink isSelected={router.pathname.includes("inmobiliaria")}>
              <TextStyle
                color={
                  router.pathname === "/inmobiliaria"
                    ? COLORS.WHITE
                    : COLORS.TEXT
                }
                type="h3"
                bold={500}
              >
                Inmobiliaria
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/servicios">
            <SelectLink isSelected={router.pathname.includes("servicios")}>
              <TextStyle
                color={
                  router.pathname === "/servicios" ? COLORS.WHITE : COLORS.TEXT
                }
                type="h3"
                bold={500}
              >
                Servicios
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle color={COLORS.TEXT} type="h3" bold={500}>
                Oficina
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle color={COLORS.TEXT} type="h3" bold={500}>
                Asesores
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle color={COLORS.TEXT} type="h3" bold={500}>
                Franquicia
              </TextStyle>
            </SelectLink>
          </Link>
        </ContainerLinks>
        <ContainerSocial>
          <TextStyle type="h3" bold={500} color={COLORS.BLUE}>
            Siguenos
          </TextStyle>
          <Link href="https://www.facebook.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_facebook.svg" alt="icon_fb"></img>
            </a>
          </Link>
          <Link href="https://www.instagram.com/recasainmobiliaria" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_instagram.svg" alt="icon_ig"></img>
            </a>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCNRzqPigRwlw2MqrSi4Zdpw"
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_youtube.svg" alt="icon_yt"></img>
            </a>
          </Link>
        </ContainerSocial>
      </ContainerMenuMobile>
    </>
  );
};

export default Header;
