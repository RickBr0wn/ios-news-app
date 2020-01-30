import React, {Component} from 'react'
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
} from 'native-base'
import Tab1 from './tabs/tabOne'
import Tab2 from './tabs/tabTwo'
import Tab3 from './tabs/tabThree'

function TabScreen() {
  return (
    <Container>
      <Header hasTabs>
        <Left />
        <Body>
          <Title>iOS News</Title>
        </Body>
        <Right />
      </Header>
      <Tabs>
        <Tab heading="Tab1">
          <Tab1 />
        </Tab>
        <Tab heading="Tab2">
          <Tab2 />
        </Tab>
        <Tab heading="Tab3">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default TabScreen
