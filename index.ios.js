// index.ios.js - Place code in here for iOS

// import a library to helo create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


// create a component
const App = () => (
    <Header headerText={'Albums'} />
);

// render the component to the device
AppRegistry.registerComponent('AwesomeProject', () => App);
