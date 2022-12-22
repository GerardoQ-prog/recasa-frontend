import React from "react";
import { ContainerInput, CustomInput, CustomTextArea } from "./styled";
import TextStyle from "../textStyle";
import { COLORS } from "../../assets/styles";

export const InputText = ({
  title,
  placeholder,
  name,
  value,
  onChange,
  maxLength = 100,
  disabled = false,
  onBlur,
  onFocus,
  onKeyUp,
  error,
  helperText,
}) => {
  return (
    <ContainerInput>
      <TextStyle
        color={COLORS.BLACK}
        type="h3"
        bold={500}
        margin="10px 0px 5px"
      >
        {title}
      </TextStyle>
      <CustomInput
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        autoComplete="off"
      />
    </ContainerInput>
  );
};

export const InputName = ({
  title,
  placeholder,
  name,
  value,
  onChange,
  maxLength = 100,
  disabled = false,
  onBlur,
  onFocus,
  onKeyUp,
  error,
  helperText,
}) => {
  const onlyLetters = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
  };

  return (
    <ContainerInput>
      <TextStyle
        color={COLORS.BLACK}
        type="h3"
        bold={500}
        margin="10px 0px 5px"
      >
        {title}
      </TextStyle>
      <CustomInput
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        onInput={(e) => onlyLetters(e)}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        autoComplete="off"
      />
    </ContainerInput>
  );
};

export const InputNumber = ({
  title,
  placeholder,
  name,
  value,
  onChange,
  maxLength = 100,
  disabled = false,
  onBlur,
  onFocus,
  onKeyUp,
  error,
  helperText,
}) => {
  const onlyNumbers = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <ContainerInput>
      <TextStyle
        color={COLORS.BLACK}
        type="h3"
        bold={500}
        margin="10px 0px 5px"
      >
        {title}
      </TextStyle>
      <CustomInput
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        onInput={(e) => onlyNumbers(e)}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        autoComplete="off"
      />
    </ContainerInput>
  );
};

export const InputArea = ({
  title,
  placeholder,
  name,
  value,
  onChange,
  maxLength = 100,
  disabled = false,
  onBlur,
  onFocus,
  onKeyUp,
  error,
  helperText,
  rows = 2,
}) => {
  return (
    <ContainerInput>
      <TextStyle
        color={COLORS.BLACK}
        type="h3"
        bold={500}
        margin="10px 0px 5px"
      >
        {title}
      </TextStyle>
      <CustomTextArea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        autoComplete="off"
        rows={rows}
      />
    </ContainerInput>
  );
};
