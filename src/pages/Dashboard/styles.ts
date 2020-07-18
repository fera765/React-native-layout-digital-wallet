import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
`;

export const Content = styled(Animated.View)`
  width: 100%;
`;

export const BoxTitle = styled.View`
  margin-top: 10px;
  width: 100%;
`;
export const BoxWelcome = styled.Text`
  font: normal 26px/31px 'San Francisco Display';
  font-style: normal;
  letter-spacing: -0.664699px;

  color: #1b1b2f;
`;

export const BoxButtons = styled(Animated.View)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 55px;
  margin-top: 40px;
  background: #ffffff;
  border-radius: 16px;
`;
export const AnalysticBox = styled.TouchableOpacity`
  padding: 10px;
  width: 100px;
  height: 55px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const TransferBox = styled.TouchableOpacity`
  padding: 10px;
  background: #1b1b2f;
  border-radius: 16px;
  width: 150px;
  height: 55px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const AnalysticBoxText = styled.Text`
  font: normal 20px/19px 'San Francisco Display';
  font-style: italic;
  letter-spacing: -0.409045px;
  margin-left: 15px;
  color: #000;
`;
export const TransferBoxText = styled.Text`
  font: normal 16px/19px 'San Francisco Display';
  font-style: italic;
  letter-spacing: -0.409045px;
  margin-right: 5px;
  color: #ffffff;
`;

export const Historical = styled(Animated.View)`
  flex-direction: column;
  margin-top: 43px;
  max-height: 400px;
  height: 100%;
  padding: 20px 10px;
  background: #f2f2f2;
  border-radius: 17px;
`;
export const HistoricalGesture = styled.View`
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -40px;
  max-width: 80px;
  width: 100%;
  height: 15px;
  background: #fff;
  border-radius: 10px;
`;
export const ScrollList = styled(ScrollView)`
  margin-top: 40px;
`;
export const HistoricalTitle = styled.Text`
  position: absolute;
  left: 10px;
  top: 20px;
  font: 500 18px/19px 'Abhaya Libre Medium';
  letter-spacing: -0.409045px;
  color: #1b1b2f;
`;

export const HistoricalTitleAll = styled.Text`
  position: absolute;
  right: 10px;
  top: 20px;
  font: 500 18px/19px 'Abhaya Libre Medium';
  letter-spacing: -0.409045px;
  color: #1b1b2f;
  text-decoration: underline;
`;

export const CardHistorical = styled.View`
  width: 100%;
  height: 85px;
  margin: 10px 0;
  border-radius: 20px;
  background: #fff;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;
export const CardHistoricalImage = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 100px;
`;
export const CardHistoricalBox = styled.View`
  flex-direction: column;
  margin-right: 30px;
  min-width: 150px;
  padding-right: 10px;
`;
export const CardHistoricalBoxTitle = styled.Text`
  font: normal 17px/17px 'San Francisco Display';
  color: #000;
`;
export const CardHistoricalBoxDate = styled.Text`
  width: 100%;
  font: normal 12px/12px 'San Francisco Display';
  color: rgba(138, 149, 158, 0.8);
`;
export const CardHistoricalPrice = styled.Text`
  margin-top: -10px;
  font: normal 17px/17px 'San Francisco Display';
  color: #000;
`;
