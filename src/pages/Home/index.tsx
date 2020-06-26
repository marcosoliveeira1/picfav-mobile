import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { FlatList, Text, Alert } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Image,
  ImageItem,
  Description,
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

const Home: React.FC = () => {
  const [feed, setFeed] = useState<Feed[]>([]);
  const [page, setPage] = useState(1);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function loadPage(pageNumber = page) {
    api.get(`/imagesFake?page=${pageNumber}`).then(response => {
      setFeed([...feed, ...response.data]);
      setPage(page + 1);
    });
  }

  async function addFavorite({ id, name, description, image }: Feed): void {
    try {
      const response = await api.post(`/favorites`, {
        name,
        description,
        image_url: image,
      });

      console.log(response.data);

      const newFeed = feed.map(image => {
        if (image.id === id) {
          image.isFavorite = response.data.is_active;
        }
        return image;
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
        data={feed}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
          <ImageItem>
            <Image source={{ uri: item.small }} />
            <Description>
              <Icon
                size={25}
                style={{ color: item.isFavorite ? '#f00' : '#fff' }}
                name="heart"
                onPress={() => addFavorite(item)}
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

export default Home;
