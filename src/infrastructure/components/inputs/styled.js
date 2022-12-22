import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/styles";

export const ContainerInput = styled.div`
  /* width: 100%; */
  margin: 10px;
`;

export const CustomTextArea = styled.textarea`
  width: 100%;
  min-height: 55px;
  padding: 8px;
  border: 1px solid ${COLORS.BLACK};
  color: ${COLORS.TEXT};
  outline: none;
  border-radius: 8px;
  font-family: "Montserrat";
  font-size: 14px;
  resize: none;

  @media ${SIZES.MOBILE} {
    font-size: 14px;
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 55px;
  padding: 8px;
  border: 1px solid ${COLORS.BLACK};
  color: ${COLORS.TEXT};
  outline: none;
  border-radius: 8px;
  font-family: "Montserrat";
  font-size: 14px;

  @media ${SIZES.MOBILE} {
    font-size: 14px;
  }
`;
