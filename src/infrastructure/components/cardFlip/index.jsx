import React from "react";
import { Card, CardBack, CardFront, CardWrap } from "./styled";

const CardFlip = ({ renderFront, renderBack }) => {
  return (
    <CardWrap>
      <Card>
        <CardFront>{renderFront()}</CardFront>
        <CardBack>{renderBack()}</CardBack>
      </Card>
    </CardWrap>
  );
};

export default CardFlip;
