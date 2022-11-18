import React from "react";
import {
  CardComment,
  CardCommentDescription,
  CardDescription,
  CardImage,
  CardPosition,
  CardTitle,
  ContainerGroup,
  ContainerMain,
} from "./styled";

const CardTestimonials = () => {
  return (
    <ContainerMain>
      <ContainerGroup>
        <CardImage src="/images/demojpg.jpg"></CardImage>
        <CardDescription>
          <CardTitle>Raquel</CardTitle>
          <CardPosition>Responsable</CardPosition>
        </CardDescription>
        <CardComment>
          <CardCommentDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            posuere interdum suscipit. Aliquam eget lacus facilisis, finibus
            enim eget, dapibus ipsum
          </CardCommentDescription>
        </CardComment>
      </ContainerGroup>
    </ContainerMain>
  );
};

export default CardTestimonials;
