import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/styles";

export const CotainerCard = styled.div``;

export const BackgroundCard = styled.div`
  background: ${(props) => props.background || "white"};
  min-height: 390px;
  position: relative;
  img {
    width: 100%;
    position: absolute;
    bottom: 0;
    @media ${SIZES.TABLET} {
      height: 200px;
      width: 200px;
    }
  }
  @media ${SIZES.TABLET} {
    min-height: 320px;
  }
  @media ${SIZES.MOBILE} {
    min-height: 300px;
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;

  @media ${SIZES.MOBILE} {
    grid-template-columns: 1fr;
  }
`;
