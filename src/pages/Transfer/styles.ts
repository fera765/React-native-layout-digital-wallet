import styled, { css } from 'styled-components/native';

interface PropsBg {
  bg?: boolean;
}

export const Container = styled.View`
  margin: 45px 20px 0 20px;
`;

export const BoxTop = styled.View`
  height: 140px;
`;
export const BoxBalance = styled.View`
  height: 51px;
`;
export const BoxBalanceSimple = styled.Text`
  font: 600 15px/15px 'Abhaya Libre Medium';
  color: #1b1b2f;
`;
export const BoxBalanceText = styled.Text`
  font: bold 25px/39px 'San Francisco Display';
  color: #1b1b2f;
`;

export const BoxFavoriteTransfer = styled.View`
  height: 20px;
  flex-direction: row;
  margin-top: 50px;
`;
export const FavoriteTransferTitle = styled.Text`
  font: normal 20px/20px 'Abhaya Libre Medium';
  color: #1b1b2f;
`;
export const FavoriteTransferAll = styled.Text`
  text-decoration: underline;
  margin-left: 5px;
  font: normal 15px/15px 'San Francisco Display';
  color: #1b1b2f;
`;
export const FavoriteTransferNew = styled.Text`
  text-decoration: underline;
  margin-left: 20px;
  font: normal 15px/15px 'San Francisco Display';
  color: #1b1b2f;
`;

export const BoxCenter = styled.View`
  margin-top: 29px;
  height: 170px;
  flex-direction: row;
  align-items: center;
`;
export const BoxFavorite = styled.View<PropsBg>`
  height: 100%;
  width: 137px;
  margin: 0 5px;
  padding: 23px 40px;
  flex-direction: column;
  align-items: center;

  background: #f2f2f2;
  box-shadow: 0px 20px 40px rgba(138, 149, 158, 0.2);
  border-radius: 16px;

  ${props =>
    props.bg &&
    css`
      background: #1b1b2f;
    `}
`;
export const Image = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 200px;
`;
export const BoxFavoriteName = styled.Text<PropsBg>`
  padding: 9px 0 10px 0;
  font: 600 15px/18px 'Abhaya Libre Medium';
  font-style: normal;

  text-align: center;
  letter-spacing: -0.38348px;
  color: #000;

  ${props =>
    props.bg &&
    css`
      color: #fff;
    `}
`;

export const BoxBottom = styled.View`
  margin: 24px 10px 0;
`;
export const BoxBottomInut = styled.View`
  margin: 10px 0;
`;
export const BoxBottomLabel = styled.Text`
  font: 600 15px/15px 'Abhaya Libre Medium';
  font-style: normal;
  letter-spacing: -0.332349px;

  color: rgba(138, 149, 158, 9);
`;
export const BoxBottomInput = styled.TextInput`
  margin-top: -10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const BoxButtonPay = styled.View`
  margin-top: 20px;
`;
export const BoxButtonPayBTN = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: #1b1b2f;
  border-radius: 16px;
`;
export const BoxButtonPayBTNText = styled.Text`
  font: bold 15px/18px 'Abhaya Libre Medium';
  font-style: italic;

  color: #fff;
`;
