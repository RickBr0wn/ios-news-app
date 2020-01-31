import React from 'react'
import {
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  View,
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import TimeAgo from './TimeAgo'

const NewsItem = ({ item, handleNewsItemPress }) => {
  return (
    <ListItem thumbnail>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => handleNewsItemPress(item)}>
        <Left>
          <Thumbnail
            square
            source={{
              uri: item.urlToImage,
            }}
            alt="N/A"
            style={{ height: 100, width: 100 }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{item.title}</Text>
          <Text note numberOfLines={3}>
            {item.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 8,
              marginLeft: 8,
            }}>
            <Text note>{item.source.name}</Text>
            <TimeAgo time={item.publishedAt} />
          </View>
        </Body>
      </TouchableOpacity>
    </ListItem>
  )
}

export default NewsItem
