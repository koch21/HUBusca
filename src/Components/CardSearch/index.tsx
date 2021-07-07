import React from 'react';
import { Container, NameTxt, TitleTxt, BodyTxt } from './styles';

interface CardInterface {
  Name: string
  Title: string
  Body: string

}

const CardSearch = ({ Name, Title, Body }: CardInterface) => {
  return <Container>
    <NameTxt>{Name}</NameTxt>
    <TitleTxt>{Title}</TitleTxt>
    <BodyTxt>{Body}</BodyTxt>
  </Container>;
}

export default CardSearch;