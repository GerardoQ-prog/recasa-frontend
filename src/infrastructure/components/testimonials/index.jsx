import { Grid } from "@mui/material";
import React from "react";
import CardTestimonials from "../cardTestimonials";
import { GridSection } from "./styled";

const Testimonials = () => {
  return (
    <div>
      <Grid container>
        <GridSection item md={4}>
          <CardTestimonials></CardTestimonials>
        </GridSection>
        <GridSection item md={4}>
          <CardTestimonials></CardTestimonials>
        </GridSection>
        <GridSection item md={4}>
          <CardTestimonials></CardTestimonials>
        </GridSection>
      </Grid>
    </div>
  );
};

export default Testimonials;
