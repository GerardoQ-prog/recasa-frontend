import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const ContainerCopy = styled.div`
  background: ${COLORS.TEXT};
  padding: 10px;
`;

export const ContainerCertificate = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  img {
    margin: 10px;
  }
`;

export const ContainterGrid = styled.div`
  margin: auto;
  max-width: 1440px;
  padding: 0px 20px;
`;

export const ContainerSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 20px auto;
  p {
    margin-right: 10px;
  }
  img {
    margin: 0px 5px;
  }
`;

export const Line = styled.div`
  background: ${COLORS.WHITE};
  width: 100%;
  height: 3px;
  margin: 30px 0px;
`;

export const ContainerFooter = styled.div`
  background: ${COLORS.BLUE};
  padding: 30px 0px;
  margin-top: 50px;
`;
