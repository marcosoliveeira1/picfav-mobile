import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Descobrir: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="map-pin" />
          </View>
        ),
      },
    },
    Pesquisar: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="search" />
          </View>
        ),
      },
    },
    Favoritos: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="heart" />
          </View>
        ),
      },
    },
    Perfil: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="user" />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Descobrir',
    activeColor: '#666666',
    inactiveColor: '#ffff',
    barStyle: { backgroundColor: '#000000' },
    backgroundColor: '#000000',
  },
);

export default createAppContainer(TabNavigator);
