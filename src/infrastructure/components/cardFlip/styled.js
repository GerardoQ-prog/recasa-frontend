import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/styles";
export const Card = styled.div`
  width: 100%;
  height: 350px;
  background: ${COLORS.WHITE};
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: 0.7s ease;
  transition: 0.7s ease;
  -webkit-box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.65);

  @media ${SIZES.TABLET} {
    height: 160px;
  }
`;

export const CardWrap = styled.div`
  margin: 10px;
  -webkit-perspective: 800;
  perspective: 800;
  &:hover {
    ${Card} {
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
  }
`;

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  padding: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
