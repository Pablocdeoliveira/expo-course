import { ImageBackground } from "react-native";
import {
  Container,
  HeaderContainer,
  TitlleText,
  HeaderImg,
  TitleContainer,
  TitleColored,
  SubTitlle,
  Input,
} from "./styles";

import Background from "../../assets/Background.png";
import Cloud from "../../assets/Vector.png";

export default function Search() {
  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Cloud}></HeaderImg>
        <TitlleText>  TypeWeather </TitlleText>
      </HeaderContainer>
      <TitleContainer>
        <TitlleText>
          Boas vindas ao <TitleColored>TypeWeather</TitleColored>{" "}
        </TitlleText>
        <SubTitlle>Escolha um local para ver a previsão do tempo</SubTitlle>
      </TitleContainer>
      <Input>Buscar local</Input>
    </Container>
    
  );
}
