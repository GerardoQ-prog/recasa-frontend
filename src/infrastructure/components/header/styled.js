import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/styles";

export const ButtonAdviser = styled.div`
  background: ${COLORS.RED};
  color: ${COLORS.WHITE};
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
`;

export const ContainerSocial = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
  }
  img {
    margin: 0px 5px;
  }
  @media ${SIZES.TABLET} {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

export const SelectLink = styled.div`
  margin: 0px 10px;
  background: ${(props) => (props.isSelected ? COLORS.RED : "transparent")};
  padding: 5px 8px;
  border-radius: 10px;
  cursor: pointer;
  @media ${SIZES.TABLET} {
    margin: 10px;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${SIZES.TABLET} {
    display: block;
  }
`;

export const ContainerTopHeader = styled.div`
  padding: 8px 30px;
  background: ${COLORS.BLUE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${SIZES.TABLET} {
    display: none;
  }
`;

export const ContainerMenuMobile = styled.div`
  position: fixed;
  top: 80px;
  color: ${COLORS.RED};
  z-index: ${(props) => (props.openMenu ? 10001 : -1)};
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
  opacity: ${(props) => (props.openMenu ? 1 : 0)};
  padding: 30px 0px;
  background: ${COLORS.WHITE};
`;

export const ContainerHeaderMobile = styled.div`
  display: none;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${SIZES.TABLET} {
    display: block;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div {
    display: flex;
  }
`;

export const ContainerHeader = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${SIZES.TABLET} {
    display: none;
  }
`;
