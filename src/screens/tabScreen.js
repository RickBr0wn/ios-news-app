import React, { Component } from 'react'
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
import Tab4 from './tabs/tabFour'

function TabScreen() {
  return (
    <Container>
      <Header style={{ backgroundColor: '#4F6D7A' }} hasTabs>
        <Left />
        <Body>
          <Title style={{ color: '#ffffff' }}>iOS News</Title>
        </Body>
        <Right />
      </Header>
      <Tabs tabBarUnderlineStyle={{ backgroundColor: '#ffffff' }}>
        <Tab
          tabStyle={{ backgroundColor: '#4F6D7A' }}
          activeTabStyle={{ backgroundColor: '#4F6D7A' }}
          textStyle={{ color: '#ffffff' }}
          activeTextStyle={{ color: '#ffffff' }}
          heading="General">
          <Tab1 />
        </Tab>
        <Tab
          tabStyle={{ backgroundColor: '#4F6D7A' }}
          activeTabStyle={{ backgroundColor: '#4F6D7A' }}
          textStyle={{ color: '#ffffff' }}
          activeTextStyle={{ color: '#ffffff' }}
          heading="Technology">
          <Tab2 />
        </Tab>
        <Tab
          tabStyle={{ backgroundColor: '#4F6D7A' }}
          activeTabStyle={{ backgroundColor: '#4F6D7A' }}
          textStyle={{ color: '#ffffff' }}
          activeTextStyle={{ color: '#ffffff' }}
          heading="Sport">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default TabScreen
