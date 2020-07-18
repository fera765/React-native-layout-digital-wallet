import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  BoxTop,
  BoxBalance,
  BoxBalanceSimple,
  BoxBalanceText,
  BoxFavoriteTransfer,
  FavoriteTransferTitle,
  FavoriteTransferAll,
  FavoriteTransferNew,
  BoxCenter,
  BoxFavorite,
  Image,
  BoxFavoriteName,
  BoxBottom,
  BoxBottomInut,
  BoxBottomLabel,
  BoxBottomInput,
  BoxButtonPay,
  BoxButtonPayBTN,
  BoxButtonPayBTNText,
} from './styles';

const Transfer: React.FC = () => (
  <Container>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <BoxTop>
          <BoxBalance>
            <BoxBalanceSimple>Saldo atual</BoxBalanceSimple>
            <BoxBalanceText>R$ 2.600,00</BoxBalanceText>
          </BoxBalance>
          <BoxFavoriteTransfer>
            <FavoriteTransferTitle>Favoritos: </FavoriteTransferTitle>
            <FavoriteTransferAll>Todos favoritos</FavoriteTransferAll>
            <FavoriteTransferNew>Novo favorito</FavoriteTransferNew>
          </BoxFavoriteTransfer>
        </BoxTop>
        <BoxCenter>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <BoxFavorite bg>
              <Image
                style={{ resizeMode: 'contain' }}
                source={{
                  uri:
                    'https://avatars2.githubusercontent.com/u/35400150?s=460&u=1e524bce20bdf0c7aabb032d06e41709009b69f5&v=4',
                }}
              />
              <BoxFavoriteName bg>Felipe</BoxFavoriteName>
              <Icon name="star" size={30} color="#fff" />
            </BoxFavorite>
            <BoxFavorite>
              <Image
                style={{ resizeMode: 'contain' }}
                source={{
                  uri:
                    'https://avatars2.githubusercontent.com/u/5620045?s=460&u=b8344df84b5bcfcdbaf1ec7b993c79e5b39af298&v=4',
                }}
              />
              <BoxFavoriteName>Felipe</BoxFavoriteName>
              <Icon name="star" size={30} color="#000" />
            </BoxFavorite>
            <BoxFavorite>
              <Image
                style={{ resizeMode: 'contain' }}
                source={{
                  uri:
                    'https://avatars0.githubusercontent.com/u/1976330?s=460&u=ba4f0a05d2c216cb6563b2f7f6513637f4c53e98&v=4',
                }}
              />
              <BoxFavoriteName>Felipe</BoxFavoriteName>
              <Icon name="star" size={30} color="#000" />
            </BoxFavorite>
          </ScrollView>
        </BoxCenter>
        <BoxBottom>
          <BoxBottomInut>
            <BoxBottomLabel>Nome</BoxBottomLabel>
            <BoxBottomInput />
          </BoxBottomInut>
          <BoxBottomInut>
            <BoxBottomLabel>Valor</BoxBottomLabel>
            <BoxBottomInput />
          </BoxBottomInut>

          <BoxButtonPay>
            <BoxButtonPayBTN activeOpacity={0.7}>
              <BoxButtonPayBTNText>
                Transferir dinheiro agora
              </BoxButtonPayBTNText>
            </BoxButtonPayBTN>
          </BoxButtonPay>
        </BoxBottom>
      </ScrollView>
    </KeyboardAvoidingView>
  </Container>
);

export default Transfer;
