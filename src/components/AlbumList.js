import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
state = {};

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <View >
      <Text>Album List !!! </Text>
      </View>
    );
  }
}

export default AlbumList;
