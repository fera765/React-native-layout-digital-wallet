import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';
import {
  MyCards,
  MyCardsTitle,
  CardContent,
  CardTop,
  CardTopText,
  CardCenter,
  CardCenterText,
  CardBottom,
  CardBottomText,
  CardBottomName,
  CardBottomTextName,
  CardBottomExpiry,
  CardBottomExpiryText,
  CardBottomTextExpiry,
} from './styles';

const Card: React.FC = () => {
  return (
    <MyCards>
      <MyCardsTitle>Meus Cartões</MyCardsTitle>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CardContent bg="#612f74">
          <CardTop>
            <CardTopText>Libank Pagamentos</CardTopText>
            <Icon name="cc-mastercard" size={40} color="#fff" />
          </CardTop>
          <CardCenter>
            <CardCenterText>2536 14** **** ****</CardCenterText>
          </CardCenter>
          <CardBottom>
            <CardBottomName>
              <CardBottomText>Nome</CardBottomText>
              <CardBottomTextName>Mateus Conceição</CardBottomTextName>
            </CardBottomName>
            <CardBottomExpiry>
              <CardBottomExpiryText>Expiração</CardBottomExpiryText>
              <CardBottomTextExpiry>11/2026</CardBottomTextExpiry>
            </CardBottomExpiry>
          </CardBottom>
        </CardContent>
        <CardContent bg="#1A2546">
          <CardTop>
            <CardTopText>Banco Kigio S.A</CardTopText>
            <Icon name="cc-visa" size={40} color="#fff" />
          </CardTop>
          <CardCenter>
            <CardCenterText>8827 46** **** ****</CardCenterText>
          </CardCenter>
          <CardBottom>
            <CardBottomName>
              <CardBottomText>Nome</CardBottomText>
              <CardBottomTextName>Mateus Conceição</CardBottomTextName>
            </CardBottomName>
            <CardBottomExpiry>
              <CardBottomExpiryText>Expiração</CardBottomExpiryText>
              <CardBottomTextExpiry>02/2023</CardBottomTextExpiry>
            </CardBottomExpiry>
          </CardBottom>
        </CardContent>
        <CardContent bg="#ff6708">
          <CardTop>
            <CardTopText>Banco Vinter</CardTopText>
            <Icon name="cc-mastercard" size={40} color="#fff" />
          </CardTop>
          <CardCenter>
            <CardCenterText>7736 94** **** ****</CardCenterText>
          </CardCenter>
          <CardBottom>
            <CardBottomName>
              <CardBottomText>Nome</CardBottomText>
              <CardBottomTextName>Mateus Conceição</CardBottomTextName>
            </CardBottomName>
            <CardBottomExpiry>
              <CardBottomExpiryText>Expiração</CardBottomExpiryText>
              <CardBottomTextExpiry>12/2024</CardBottomTextExpiry>
            </CardBottomExpiry>
          </CardBottom>
        </CardContent>
      </ScrollView>
    </MyCards>
  );
};

export default Card;
