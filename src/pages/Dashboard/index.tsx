import React, { useState } from 'react';
import { Animated, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import {
  Container,
  Content,
  ScrollList,
  BoxTitle,
  BoxWelcome,
  BoxButtons,
  AnalysticBox,
  TransferBox,
  AnalysticBoxText,
  TransferBoxText,
  Historical,
  HistoricalGesture,
  HistoricalTitle,
  HistoricalTitleAll,
  CardHistorical,
  CardHistoricalImage,
  CardHistoricalBox,
  CardHistoricalBoxTitle,
  CardHistoricalBoxDate,
  CardHistoricalPrice,
} from './styles';

import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function handleChagneHistorical(event: any) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY <= 20) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? -220 : 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? -220 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Content
        style={{
          opacity: translateY.interpolate({
            inputRange: [1, 300],
            outputRange: [1, 1.5],
          }),
        }}
      >
        <BoxTitle>
          <BoxWelcome>Bem Vindo</BoxWelcome>
        </BoxTitle>

        <Card />
      </Content>

      <BoxButtons
        style={{
          opacity: translateY.interpolate({
            inputRange: [1, 300],
            outputRange: [1, 3],
          }),
        }}
      >
        <AnalysticBox activeOpacity={0.7}>
          <Icon name="analytics" size={30} color="#000" />
          <AnalysticBoxText>Análise</AnalysticBoxText>
        </AnalysticBox>
        <TransferBox
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Transfer')}
        >
          <Icon name="md-cash-outline" size={20} color="#fff" />
          <TransferBoxText>Transferência</TransferBoxText>
        </TransferBox>
      </BoxButtons>

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={handleChagneHistorical}
      >
        <Historical
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-220, 0, 240],
                  outputRange: [-220, 0, 40],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <HistoricalGesture />
          <HistoricalTitle>Compras</HistoricalTitle>
          <HistoricalTitleAll>Ver tudo</HistoricalTitleAll>
          <ScrollList
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ flex: 1 }}>
              <CardHistorical>
                <CardHistoricalImage
                  style={{ resizeMode: 'contain' }}
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                />
                <CardHistoricalBox>
                  <CardHistoricalBoxTitle>
                    Netflix filmes online
                  </CardHistoricalBoxTitle>
                  <CardHistoricalBoxDate>Jun 05 - 15:32</CardHistoricalBoxDate>
                </CardHistoricalBox>
                <CardHistoricalPrice>-R$34,00</CardHistoricalPrice>
              </CardHistorical>
              <CardHistorical>
                <CardHistoricalImage
                  style={{ resizeMode: 'contain' }}
                  source={{
                    uri:
                      'https://logospng.org/download/spotify/logo-spotify-icon-2048.png',
                  }}
                />
                <CardHistoricalBox>
                  <CardHistoricalBoxTitle>
                    Spotify Music Familia
                  </CardHistoricalBoxTitle>
                  <CardHistoricalBoxDate>Jun 10 - 03:30</CardHistoricalBoxDate>
                </CardHistoricalBox>
                <CardHistoricalPrice>-R$39,00</CardHistoricalPrice>
              </CardHistorical>
              <CardHistorical>
                <CardHistoricalImage
                  style={{ resizeMode: 'contain' }}
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                />
                <CardHistoricalBox>
                  <CardHistoricalBoxTitle>Amazon Prime</CardHistoricalBoxTitle>
                  <CardHistoricalBoxDate>Jun 15 - 05:30</CardHistoricalBoxDate>
                </CardHistoricalBox>
                <CardHistoricalPrice>-R$9,00</CardHistoricalPrice>
              </CardHistorical>
              <CardHistorical>
                <CardHistoricalImage
                  style={{ resizeMode: 'contain' }}
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                />
                <CardHistoricalBox>
                  <CardHistoricalBoxTitle>Amazon Prime</CardHistoricalBoxTitle>
                  <CardHistoricalBoxDate>Jun 15 - 05:30</CardHistoricalBoxDate>
                </CardHistoricalBox>
                <CardHistoricalPrice>-R$9,00</CardHistoricalPrice>
              </CardHistorical>
              <CardHistorical>
                <CardHistoricalImage
                  style={{ resizeMode: 'contain' }}
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                />
                <CardHistoricalBox>
                  <CardHistoricalBoxTitle>Amazon Prime</CardHistoricalBoxTitle>
                  <CardHistoricalBoxDate>Jun 15 - 05:30</CardHistoricalBoxDate>
                </CardHistoricalBox>
                <CardHistoricalPrice>-R$9,00</CardHistoricalPrice>
              </CardHistorical>
              <CardHistorical>
                <CardHistoricalImage
                  style={{ resizeMode: 'contain' }}
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                />
                <CardHistoricalBox>
                  <CardHistoricalBoxTitle>Amazon Prime</CardHistoricalBoxTitle>
                  <CardHistoricalBoxDate>Jun 15 - 05:30</CardHistoricalBoxDate>
                </CardHistoricalBox>
                <CardHistoricalPrice>-R$9,00</CardHistoricalPrice>
              </CardHistorical>
              <CardHistorical>
                <CardHistoricalImage
                  style={{ resizeMode: 'contain' }}
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                />
                <CardHistoricalBox>
                  <CardHistoricalBoxTitle>Amazon Prime</CardHistoricalBoxTitle>
                  <CardHistoricalBoxDate>Jun 15 - 03:30</CardHistoricalBoxDate>
                </CardHistoricalBox>
                <CardHistoricalPrice>-R$9,00</CardHistoricalPrice>
              </CardHistorical>
            </View>
          </ScrollList>
        </Historical>
      </PanGestureHandler>
    </Container>
  );
};

export default Dashboard;
