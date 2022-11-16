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
          <TextStyle type="h4" bold={700} color={COLORS.WHITE}>
            Siguenos
          </TextStyle>
          <Link href="https://www.facebook.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_facebook.svg"></img>
            </a>
          </Link>
          <Link href="https://www.facebook.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_twitter.svg"></img>
            </a>
          </Link>
          <Link href="https://www.facebook.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_linkedin.svg"></img>
            </a>
          </Link>
          <Link href="https://www.facebook.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_youtube.svg"></img>
            </a>
          </Link>
        </ContainerSocial>
        <ButtonAdviser>Ser asesor</ButtonAdviser>
      </ContainerTopHeader>
      <ContainerHeader showShadow={showShadow}>
        <Link href="/">
          <img src="./images/logo_recasa.svg" />
        </Link>
        <ContainerLinks>
          <Link href="/">
            <SelectLink isSelected={router.pathname === "/"}>
              <TextStyle
                color={router.pathname === "/" ? COLORS.WHITE : COLORS.TEXT}
                type="h3"
                bold={700}
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
                bold={700}
              >
                Inmobiliaria
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle color={COLORS.TEXT} type="h3" bold={700}>
                Oficina
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle color={COLORS.TEXT} type="h3" bold={700}>
                Asesores
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle color={COLORS.TEXT} type="h3" bold={700}>
                Franquicia
              </TextStyle>
            </SelectLink>
          </Link>
        </ContainerLinks>
      </ContainerHeader>
      <ContainerHeaderMobile>
        <img src="./images/logo_recasa.svg" />
        <div>
          <ButtonAdviser>Ser asesor</ButtonAdviser>
          {openMenu ? (
            <img
              src="./images/ic_close.svg"
              style={{ margin: "0px 0px 0px 10px" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          ) : (
            <img
              src="./images/ic_burger.svg"
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
                bold={700}
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
                bold={700}
              >
                Inmobiliaria
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle color={COLORS.TEXT} type="h3" bold={700}>
                Oficina
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle color={COLORS.TEXT} type="h3" bold={700}>
                Asesores
              </TextStyle>
            </SelectLink>
          </Link>
          <Link href="/">
            <SelectLink>
              <TextStyle color={COLORS.TEXT} type="h3" bold={700}>
                Franquicia
              </TextStyle>
            </SelectLink>
          </Link>
        </ContainerLinks>
        <ContainerSocial>
          <TextStyle type="h3" bold={700} color={COLORS.BLUE}>
            Siguenos
          </TextStyle>
          <Link href="https://www.facebook.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_facebook.svg"></img>
            </a>
          </Link>
          <Link href="https://www.facebook.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_twitter.svg"></img>
            </a>
          </Link>
          <Link href="https://www.facebook.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_linkedin.svg"></img>
            </a>
          </Link>
          <Link href="https://www.facebook.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img src="./images/ic_youtube.svg"></img>
            </a>
          </Link>
        </ContainerSocial>
      </ContainerMenuMobile>
    </>
  );
};

export default Header;
