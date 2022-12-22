import { Grid } from "@mui/material";
import React from "react";
import { COLORS } from "../../assets/styles";
import Layout from "../layout";
import TextStyle from "../textStyle";
import { Title } from "../titles";
import { ContainerIcon } from "./styled";

const Statistics = () => {
  const [counters, setCounters] = React.useState({
    value: 4,
    interval: 1,
    initValue: 0,
  });
  const [countersTwo, setCountersTwo] = React.useState({
    value: 3,
    interval: 1,
    initValue: 0,
  });
  const [countersThree, setCountersThree] = React.useState({
    value: 3,
    interval: 1,
    initValue: 0,
  });

  const handlerCounters = (item, setItem) => {
    setInterval(() => {
      let startValue = 0;
      let duration = Math.floor(1000 / item.value);
      let counter = setInterval(() => {
        startValue += item.interval;
        setItem({
          ...item,
          initValue: startValue,
        });
        if (startValue == item.value) {
          clearInterval(counter);
        }
      }, duration);
    }, 2500);
  };

  React.useEffect(() => {
    handlerCounters(counters, setCounters);
    handlerCounters(countersTwo, setCountersTwo);
    handlerCounters(countersThree, setCountersThree);
  }, []);

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
            bold={500}
            color={COLORS.TEXT}
            textAlign="center"
            type="h1"
          >
            Disponibilidad garantizada
          </TextStyle>
          <TextStyle
            bold={400}
            color={COLORS.TEXT}
            textAlign="center"
            type="h3"
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
            bold={500}
            color={COLORS.TEXT}
            textAlign="center"
            type="h1"
          >
            Respaldo
          </TextStyle>
          <TextStyle
            bold={400}
            color={COLORS.TEXT}
            textAlign="center"
            type="h3"
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
            bold={500}
            color={COLORS.TEXT}
            textAlign="center"
            type="h1"
          >
            Asistencia
          </TextStyle>
          <TextStyle
            bold={400}
            color={COLORS.TEXT}
            textAlign="center"
            type="h3"
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
            bold={500}
            color={COLORS.TEXT}
            textAlign="center"
            type="h1"
          >
            Ética y Transparencia
          </TextStyle>
          <TextStyle
            bold={400}
            color={COLORS.TEXT}
            textAlign="center"
            type="h3"
            margin="20px 0px"
          >
            La empresa y nuestros ejecutivos se guían bajo una política de
            principios, ética y transparencia total.
          </TextStyle>
        </Grid>
      </Grid>
      <TextStyle
        color={COLORS.BLUE}
        bold={500}
        textAlign="center"
        size="40px"
        sizeMobile="30px"
      >
        Somos expertos en lo que hacemos
      </TextStyle>
      <Grid container style={{ margin: "30px 0px" }}>
        <Grid item xs={12} md={4} style={{ padding: 10 }}>
          <TextStyle
            bold={600}
            color={COLORS.YELLOW}
            size="80px"
            sizeMobile="40px"
            textAlign="center"
          >
            +{counters.initValue}
          </TextStyle>
          <TextStyle
            bold={500}
            color={COLORS.TEXT}
            textAlign="center"
            type="h1"
          >
            Años de Servicio
          </TextStyle>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 10 }}>
          <TextStyle
            bold={600}
            color={COLORS.YELLOW}
            size="80px"
            sizeMobile="40px"
            textAlign="center"
          >
            +{countersTwo.initValue}k
          </TextStyle>
          <TextStyle
            bold={500}
            color={COLORS.TEXT}
            textAlign="center"
            type="h1"
          >
            Servicios Realizados
          </TextStyle>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 10 }}>
          <TextStyle
            bold={600}
            color={COLORS.YELLOW}
            size="80px"
            sizeMobile="40px"
            textAlign="center"
          >
            +{countersThree.initValue}k
          </TextStyle>
          <TextStyle
            bold={500}
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
