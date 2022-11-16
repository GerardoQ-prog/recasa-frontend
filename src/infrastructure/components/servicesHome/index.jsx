import React from "react";
import { COLORS } from "../../assets/styles";
import Layout from "../layout";
import { Title } from "../titles";
import CardFlip from "../cardFlip";
import { BackgroundCard, ContainerCards } from "./styled";
import TextStyle from "../textStyle";

const ServicesHome = ({ dataServices }) => {
  return (
    <Layout backgorund={COLORS.BLUE}>
      <div style={{ padding: "30px 0px 50px 0px" }}>
        <Title background={COLORS.RED} color={COLORS.WHITE}>
          Servicios
        </Title>
        <TextStyle color={COLORS.WHITE} bold={700} type="h2" textAlign="center">
          En RECASA te ofrecemos muchas herramientas para que tomes la mejor
          decisión en tu inversión. Explóralas.
        </TextStyle>
        <br></br>
        <br></br>
        <ContainerCards>
          {dataServices.map((item, index) => {
            return (
              <CardFlip
                renderBack={() => (
                  <div>
                    <TextStyle
                      color={COLORS.TEXT}
                      type="h3"
                      bold={700}
                      textAlign="center"
                    >
                      {item.text}
                    </TextStyle>
                  </div>
                )}
                renderFront={() => (
                  <BackgroundCard background={item.background}>
                    <img src={item.image} width="80%" />
                  </BackgroundCard>
                )}
                key={index}
              />
            );
          })}
        </ContainerCards>
      </div>
    </Layout>
  );
};

export default ServicesHome;
