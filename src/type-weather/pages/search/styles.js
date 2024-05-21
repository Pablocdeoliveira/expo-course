import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderContainer = styled.View`
  display: flex;
`;

export const HeaderImg = styled.Image`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  margin-top: 48px;
`;

export const TitlleText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 188px;
  gap: 4;
`;

export const SubTitlle = styled.View`
  font-size: 14px;
  font-weight: normal;
`;

export const TitleColored = styled.View`
  font-size: 20px;
  color: #8fb2f5;
  font-weight: bold;
`;
export const Input = styled.TextInput`
  margin-top: 32px;
  color: white;
  width: 311px;
  height: 36px;
  padding-left: 20px;
`;
