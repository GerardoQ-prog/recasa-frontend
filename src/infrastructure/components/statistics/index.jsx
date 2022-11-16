import { Grid } from "@mui/material";
import React from "react";
import { COLORS } from "../../assets/styles";
import Layout from "../layout";
import TextStyle from "../textStyle";
import { Title } from "../titles";
import { ContainerIcon } from "./styled";

const Statistics = () => {
  const [counter, setCounter] = React.useState(0);
  const [counterTwo, setCounterTwo] = React.useState(0);
  const [counterThree, setCounterThree] = React.useState(0);

  const handleActiveCounters = () => {
    for (let i = 0; i < 3; i++) {
      i += 0.5;
      setCounter(i);
    }
  };

  React.useEffect(() => {
    handleActiveCounters();
    setInterval(() => {}, 2000);
  }, []);

  console.log("counter", counter);

  return (
    <Layout>
      <Title background={COLORS.RED} color={COLORS.WHITE} width="300px">
        ¿Por qué TRABAJAR CON RECASA?
      </Title>
      <Grid container style={{ margin: "30px 0px" }}>
        <Grid item xs={12} md={3} style={{ padding: 10 }}>
          <ContainerIcon>
            <img src="./images/ic_casa.png" />
          </ContainerIcon>
          <TextStyle
            bold={700}
            color={COLORS.TEXT}
            textAlign="center"
            type="h2"
          >
            Disponibilidad garantizada
          </TextStyle>
          <TextStyle
            bold={400}
            color={COLORS.TEXT}
            textAlign="center"
            type="h4"
            margin="20px 0px"
          >
            Encuentra la mayor oferta de vivienda nueva en la ciudad.
          </TextStyle>
        </Grid>
        <Grid item xs={12} md={3} style={{ padding: 10 }}>
          <ContainerIcon>
            <img src="./images/ic_trato.png" />
          </ContainerIcon>
          <TextStyle
            bold={700}
            color={COLORS.TEXT}
            textAlign="center"
            type="h2"
          >
            Respaldo
          </TextStyle>
          <TextStyle
            bold={400}
            color={COLORS.TEXT}
            textAlign="center"
            type="h4"
            margin="20px 0px"
          >
            ¡Eres nuestra prioridad! Evaluamos exhaustivamente nuestra oferta
            para que compres/alquiles con la mayor tranquilidad.
          </TextStyle>
        </Grid>
        <Grid item xs={12} md={3} style={{ padding: 10 }}>
          <ContainerIcon>
            <img src="./images/ic_call_center.png" />
          </ContainerIcon>
          <TextStyle
            bold={700}
            color={COLORS.TEXT}
            textAlign="center"
            type="h2"
          >
            Asistencia
          </TextStyle>
          <TextStyle
            bold={400}
            color={COLORS.TEXT}
            textAlign="center"
            type="h4"
            margin="20px 0px"
          >
            Te damos toda la información de nuestors expertos y aliados para que
            tomes la mejor decisión.
          </TextStyle>
        </Grid>
        <Grid item xs={12} md={3} style={{ padding: 10 }}>
          <ContainerIcon>
            <img src="./images/ic_etica.png" />
          </ContainerIcon>
          <TextStyle
            bold={700}
            color={COLORS.TEXT}
            textAlign="center"
            type="h2"
          >
            Ética y Transparencia
          </TextStyle>
          <TextStyle
            bold={400}
            color={COLORS.TEXT}
            textAlign="center"
            type="h4"
            margin="20px 0px"
          >
            La empresa y nuestros ejecutivos se guían bajo una política de
            principios, ética y transparencia total.
          </TextStyle>
        </Grid>
      </Grid>
      <TextStyle
        color={COLORS.BLUE}
        bold={700}
        textAlign="center"
        size="40px"
        sizeMobile="30px"
      >
        Somos expertos en lo que hacemos
      </TextStyle>
      <Grid container style={{ margin: "30px 0px" }}>
        <Grid item xs={12} md={4} style={{ padding: 10 }}>
          <TextStyle
            bold={900}
            color={COLORS.YELLOW}
            size="80px"
            sizeMobile="40px"
            textAlign="center"
          >
            +4
          </TextStyle>
          <TextStyle
            bold={700}
            color={COLORS.TEXT}
            textAlign="center"
            type="h1"
          >
            Años de Servicio
          </TextStyle>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 10 }}>
          <TextStyle
            bold={900}
            color={COLORS.YELLOW}
            size="80px"
            sizeMobile="40px"
            textAlign="center"
          >
            +2.5k
          </TextStyle>
          <TextStyle
            bold={700}
            color={COLORS.TEXT}
            textAlign="center"
            type="h1"
          >
            Servicios Realizados
          </TextStyle>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 10 }}>
          <TextStyle
            bold={900}
            color={COLORS.YELLOW}
            size="80px"
            sizeMobile="40px"
            textAlign="center"
          >
            +2.5k
          </TextStyle>
          <TextStyle
            bold={700}
            color={COLORS.TEXT}
            textAlign="center"
            type="h1"
          >
            Familias Satisfechas
          </TextStyle>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Statistics;
