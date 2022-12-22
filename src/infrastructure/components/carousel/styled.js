import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/styles";

export const Button = styled.div`
  background: ${COLORS.RED};
  color: ${COLORS.WHITE};
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInformation = styled.div`
  width: 450px;
  p {
    margin: 20px 0px;
  }
  @media ${SIZES.TABLET} {
    margin-top: 35%;
    width: 100%;
  }
`;

export const ContainerBackdropCarousel = styled.div`
  background: linear-gradient(90deg, #000 30%, transparent);
  height: 100%;
  padding-left: 40px;
  padding-top: 40px;
  position: absolute;
  top: 0;
  left: 0;
  @media ${SIZES.TABLET} {
    background: linear-gradient(1turn, #000, transparent);
    bottom: 0;
  }
`;
