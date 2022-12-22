import { Grid } from "@mui/material";
import React from "react";
import { COLORS } from "../../assets/styles";
import CardTestimonials from "../cardTestimonials";
import Layout from "../layout";
import TextStyle from "../textStyle";
import { GridSection } from "./styled";

const Testimonials = () => {
  return (
    <Layout backgorund={COLORS.RED}>
      <TextStyle
        size="40px"
        sizeMobile="25px"
        color={COLORS.WHITE}
        bold={500}
        textAlign="center"
        margin="10px 0px 20px 0px"
      >
        ¿Nuestra mejor garantia? Nuestros{" "}
        <b style={{ textDecoration: "underline" }}>Clientes</b>
      </TextStyle>
      <Grid container>
        <GridSection item xs={12} md={4}>
          <CardTestimonials />
        </GridSection>
        <GridSection item xs={12} md={4}>
          <CardTestimonials></CardTestimonials>
        </GridSection>
        <GridSection item xs={12} md={4}>
          <CardTestimonials></CardTestimonials>
        </GridSection>
      </Grid>
    </Layout>
  );
};

export default Testimonials;
