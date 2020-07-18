import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, BoxIcon, Image } from './styles';

const Header: React.FC = () => (
  <Container>
    <BoxIcon>
      <Icon name="menu" size={30} color="#000" />
    </BoxIcon>
    <Image
      style={{ resizeMode: 'contain' }}
      source={{
        uri:
          'https://avatars2.githubusercontent.com/u/35400150?s=460&u=1e524bce20bdf0c7aabb032d06e41709009b69f5&v=4',
      }}
    />
  </Container>
);

export default Header;
