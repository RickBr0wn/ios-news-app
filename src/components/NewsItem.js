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
import TimeAgo from './TimeAgo'

const NewsItem = ({ data }) => {
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri: data.urlToImage,
          }}
          alt="N/A"
          style={{ height: 90, width: 90 }}
        />
      </Left>
      <Body>
        <Text numberOfLines={2}>{data.title}</Text>
        <Text note numberOfLines={2}>
          {data.description}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 8,
            marginLeft: 8,
          }}>
          <Text note>{data.source.name}</Text>
          <TimeAgo time={data.publishedAt} />
        </View>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  )
}

export default NewsItem
