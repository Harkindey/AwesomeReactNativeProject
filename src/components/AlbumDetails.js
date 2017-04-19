import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetails = (props) => {
  return(
    <View>
      <Text>{props.record.title}</Text>
    </View>
  );
};

export default AlbumDetails;
