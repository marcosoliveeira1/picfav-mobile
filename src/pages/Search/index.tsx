import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { FlatList, Text } from 'react-native';
import api from '../../services/api';

import { Container, Image, ImageItem, Description } from './styles';

export interface Feed {
  id: string;
  name: string;
  description: string;
  image: string;
  small: string;
  image_cropped: string;
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
            <Description>{item.description}</Description>
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
