import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { FlatList, Text, Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import api from '../../services/api';

import {
  Container,
  Image,
  ImageItem,
  Description,
  ContainerEmpty,
  DescriptionText,
} from './styles';

export interface Feed {
  id: string;
  name: string;
  description: string;
  image: string;
  small: string;
  image_cropped: string;
  isFavorite: boolean;
}

const Favorites: React.FC = navigation => {
  const [feedFav, setFeed] = useState<Feed[]>([]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function loadPage() {
    api.get(`/favorites`).then(response => {
      if (response.data.length > 0) {
        setFeed(response.data);
      }
      console.log(feedFav);
    });
  }

  const renderEmptyContainer = () => {
    return (
      <ContainerEmpty>
        <DescriptionText onPress={() => loadPage()}>
          Lista vazia.Clique Aqui para atualizar.{' '}
        </DescriptionText>
        <Icon
          size={25}
          style={{ color: '#fff' }}
          name="refresh-ccw"
          onPress={() => loadPage()}
        />
      </ContainerEmpty>
    );
  };

  async function removeFavorite({ id }: Feed): void {
    try {
      console.log();

      const response = await api.put(`/favorites/${id}`);

      const newFeed = feedFav.filter(image => {
        return !(image.id === id);
      });

      setFeed(newFeed);
    } catch (err) {
      console.log(err);

      Alert.alert('Erro', err.error || 'Internal Error');
    }
  }

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <Container>
      <FlatList
        ListEmptyComponent={() => renderEmptyContainer()}
        data={feedFav}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
          <ImageItem>
            <Image source={{ uri: item.url }} />
            <Description>
              <Icon
                size={25}
                style={{ color: '#f00' }}
                name="heart"
                onPress={() => removeFavorite(item)}
              />
              <DescriptionText>{item.description}</DescriptionText>
            </Description>
          </ImageItem>
        )}
        keyExtractor={item => {
          return String(`${item.id}`);
        }}
      />
    </Container>
  );
};

export default Favorites;
