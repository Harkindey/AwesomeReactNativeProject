import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails';

class AlbumList extends Component {
state = { albums: [] };
// Use STATE only with class based component

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => this.setState({ albums: res.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} record={album} />);
  }

  render() {
    console.log(this.state);
    // PROP --> communiation btw a parent component to child component
    // STATE -->  for component internal recored keeping

    return (
      <View >
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
