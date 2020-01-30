import React, {Component} from 'react'
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base'

export default function ListThumbnailExample() {
  return (
    <Container>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{uri: 'https://source.unsplash.com/random'}}
              />
            </Left>
            <Body>
              <Text>This is the Title</Text>
              <Text note numberOfLines={2}>
                Its time to build a difference . .Its time to build a difference
                . .Its time to build a difference . .Its time to build a
                difference . .
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{uri: 'https://source.unsplash.com/random'}}
              />
            </Left>
            <Body>
              <Text>This is the Title</Text>
              <Text note numberOfLines={2}>
                Its time to build a difference . .Its time to build a difference
                . .Its time to build a difference . .Its time to build a
                difference . .
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{uri: 'https://source.unsplash.com/random'}}
              />
            </Left>
            <Body>
              <Text>This is the Title</Text>
              <Text note numberOfLines={2}>
                Its time to build a difference . .Its time to build a difference
                . .Its time to build a difference . .Its time to build a
                difference . .
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{uri: 'https://source.unsplash.com/random'}}
              />
            </Left>
            <Body>
              <Text>This is the Title</Text>
              <Text note numberOfLines={2}>
                Its time to build a difference . .Its time to build a difference
                . .Its time to build a difference . .Its time to build a
                difference . .
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}
