import styled, { css } from 'styled-components/native';

interface PropsColor {
  bg: string;
}

export const MyCards = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 70px;
`;
export const MyCardsTitle = styled.Text`
  position: absolute;
  left: 0;
  top: 0;
  font: 500 18px/19px 'Abhaya Libre Medium';
  font-style: normal;

  color: #1b1b2f;
`;

export const CardContent = styled.View<PropsColor>`
  margin: 51px 10px 0;
  background: ${props => props.bg};
  flex-direction: column;
  width: 327px;
  border-radius: 10px;
  height: 187px;
  padding: 0 22px;
`;
export const CardTop = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  align-items: center;
`;
export const CardTopText = styled.Text`
  font: normal 18px/25px 'Abhaya Libre Medium';
  font-style: normal;
  letter-spacing: 0.14px;
  color: #fff;
`;
export const CardCenter = styled.View`
  margin-top: 20px;
`;
export const CardCenterText = styled.Text`
  font: normal 20px/36px 'Abhaya Libre Medium';
  font-style: normal;
  letter-spacing: 0.2px;
  color: #fff;
`;
export const CardBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 17px;
`;
export const CardBottomName = styled.View`
  height: 46px;
`;
export const CardBottomText = styled.Text`
  color: #f2f2f2;
  font: normal 10px/16px 'sans-serif';
`;
export const CardBottomTextName = styled.Text`
  font: normal 18px/18px 'Abhaya Libre Medium';
  margin-top: 8px;
  color: #fff;
`;

export const CardBottomExpiry = styled.View`
  height: 46px;
`;
export const CardBottomExpiryText = styled.Text`
  color: #f2f2f2;
  font: normal 10px/16px 'sans-serif';
`;
export const CardBottomTextExpiry = styled.Text`
  font: normal 18px/18px 'Abhaya Libre Medium';
  margin-top: 8px;
  color: #fff;
`;
