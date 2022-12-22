import React from "react";
import { InputArea, InputNumber, InputText } from "../inputs";
import { useForm } from "../../hooks/useForm";
import { ContainerForm } from "./styled";
import { Title } from "../titles";
import { COLORS } from "../../assets/styles";
import { ButtonPrimary } from "../button";

const FormContact = () => {
  const { form, onChange } = useForm({
    dni: "",
    name: "",
    phone: "",
    comment: "",
  });

  return (
    <ContainerForm>
      <Title background={COLORS.RED} color={COLORS.WHITE}>
        Contáctanos
      </Title>
      <InputNumber
        title="DNI o RUC"
        placeholder="Ingrese DNI o RUC"
        name="dni"
        value={form.dni}
        onChange={onChange}
        maxLength={11}
      />
      <InputText
        title="Nombre o Razón social"
        placeholder="Ingrese nombre o razón social"
        name="name"
        value={form.name}
        onChange={onChange}
      />
      <InputNumber
        title="Teléfono"
        placeholder="Ingrese télefono"
        name="phone"
        value={form.phone}
        onChange={onChange}
        maxLength={9}
      />
      <InputArea
        title="Comentario"
        placeholder="Ingrese comentario"
        name="comment"
        value={form.comment}
        onChange={onChange}
        rows={4}
      />
      <ButtonPrimary background={COLORS.BLUE} color={COLORS.WHITE} size="18px">
        Enviar
      </ButtonPrimary>
    </ContainerForm>
  );
};

export default FormContact;
