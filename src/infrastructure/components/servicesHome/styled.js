import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/styles";

export const BackgroundCard = styled.div`
  background: ${(props) => props.background || "white"};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    width: 80%;
    @media ${SIZES.TABLET} {
      height: 150px;
      width: 150px;
    }
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;

  @media ${SIZES.TABLET} {
    grid-template-columns: 1fr;
  }
`;
