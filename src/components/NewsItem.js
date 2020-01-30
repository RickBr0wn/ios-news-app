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
} from 'native-base'

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
          // style={{ height: 60, width: 60 }}
        />
      </Left>
      <Body>
        <Text numberOfLines={2}>{data.title}</Text>
        <Text style={{ color: 'grey', fontSize: 10 }}>{data.source.name}</Text>
        <Text note numberOfLines={2}>
          {data.description}
        </Text>
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
