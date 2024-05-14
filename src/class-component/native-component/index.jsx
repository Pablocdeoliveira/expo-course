import React from "react";
import { FlatList, ImageBackground } from "react-native";
import * as S from './style.js';

function CreativeCard (props){
  return(
    <S.cardContainer>
      <S.CardTitle>{props.title}</S.CardTitle>
      <S.CardSubtitle>{props.descricao}</S.CardSubtitle>
    </S.cardContainer>
  );
}

export const CreativeComponet = React.FC = () => {
    return (
      <S.ImageContainer>
        <CreativeCard />
      </S.ImageContainer>
    );
}