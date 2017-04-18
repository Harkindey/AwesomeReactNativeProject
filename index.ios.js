// index.ios.js - Place code in here for iOS

// import a library to helo create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// render the component to the device
AppRegistry.registerComponent('AwesomeProject', () => App);
