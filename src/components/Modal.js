import React from 'react'
import {
  View,
  Text,
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Icon,
  Title,
  Button,
} from 'native-base'
import { Dimensions, Modal, Share } from 'react-native'
import { WebView } from 'react-native-webview'

const ModalComponent = ({ visibility, showModal, article, onClose, share }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visibility}
      onRequestClose={onClose}>
      <Container
        style={{ margin: 15, flex: 1, marginBottom: 0, color: '#ffffff' }}>
        <Header style={{ backgroundColor: '#009387' }}>
          <Left>
            <Button onPress={onClose} transparent>
              <Icon name="close" style={{ color: '#ffffff', fontSize: 28 }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#ffffff' }}>{article.title}</Title>
          </Body>
          <Right>
            <Button onPress={share} transparent>
              <Icon name="share" style={{ color: '#ffffff', fontSize: 28 }} />
            </Button>
          </Right>
        </Header>
        <Content>
          <WebView
            source={{ uri: article.url }}
            style={{ flex: 1, height: 750 }}
          />
        </Content>
      </Container>
    </Modal>
  )
}

export default ModalComponent
