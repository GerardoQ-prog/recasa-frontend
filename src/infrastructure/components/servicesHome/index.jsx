import React from "react";
import { COLORS } from "../../assets/styles";
import Layout from "../layout";
import { Title } from "../titles";
import { BackgroundCard, ContainerCards } from "./styled";
import TextStyle from "../textStyle";
import LayoutModal from "../layoutModal";
import FormContact from "../formContact";

const ServicesHome = ({ dataServices }) => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <Layout backgorund={COLORS.BLUE}>
      <div style={{ padding: "30px 0px 50px 0px" }}>
        <Title background={COLORS.RED} color={COLORS.WHITE}>
          Servicios
        </Title>
        <TextStyle color={COLORS.WHITE} bold={400} type="h2" textAlign="center">
          En RECASA te ofrecemos muchas herramientas para que tomes la mejor
          decisión en tu inversión. Explóralas.
        </TextStyle>
        <br></br>
        <br></br>
        <ContainerCards>
          {dataServices.map((item, index) => {
            return (
              <BackgroundCard background={item.background}>
                <TextStyle
                  color={COLORS.BLACK}
                  type="h3"
                  bold={400}
                  textAlign="center"
                  margin="10px"
                >
                  {item.text}
                </TextStyle>
                <div onClick={() => setOpenModal(!openModal)}>
                  <TextStyle
                    color={COLORS.BLUE}
                    type="h3"
                    bold={600}
                    textAlign="center"
                    margin="10px"
                    textDecoration="underline"
                    cursor="pointer"
                  >
                    {item.link}
                  </TextStyle>
                </div>
                <img src={item.image} width="100%" />
              </BackgroundCard>
            );
          })}
        </ContainerCards>
      </div>
      <LayoutModal
        open={openModal}
        handleClose={() => setOpenModal(!openModal)}
      >
        <FormContact />
      </LayoutModal>
    </Layout>
  );
};

export default ServicesHome;
