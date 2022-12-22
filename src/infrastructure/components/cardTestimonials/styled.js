import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerGroup = styled.div`
  max-width: 300px;
  width: 100%;
  height: 480px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.65);
  border-radius: 10px;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  display: block;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  gap: 10px;
`;

export const CardTitle = styled.p`
  font-weight: 500;
  margin: 0;
  color: #736d6d;
`;

export const CardPosition = styled.p`
  font-weight: 400;
  margin: 0;
  color: #736d6d;
`;

export const CardComment = styled.div`
  max-width: 260px;
  width: 100%;
  height: 120px;
  position: absolute;
  top: 5rem;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #e6e7e9;
  border-radius: 3px;
  display: flex;
  padding: 0 20px;

  &::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    margin: -20px 0 0 13rem;
    border-bottom: 20px solid #e6e7e9;
    border-left: 20px solid transparent;
  }
`;

export const CardCommentDescription = styled.p`
  color: #736d6d;
  font-size: 12px;
  text-align: justify;
  font-weight: 500;
`;
