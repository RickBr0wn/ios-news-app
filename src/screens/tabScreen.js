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
      <Header style={{backgroundColor: '#009387'}} hasTabs>
        <Left />
        <Body>
          <Title style={{color: '#ffffff'}}>iOS News</Title>
        </Body>
        <Right />
      </Header>
      <Tabs tabBarUnderlineStyle={{backgroundColor: '#ffffff'}}>
        <Tab
          tabStyle={{backgroundColor: '#009387'}}
          activeTabStyle={{backgroundColor: '#009387'}}
          textStyle={{color: '#ffffff'}}
          activeTextStyle={{color: '#ffffff'}}
          heading="Tab1">
          <Tab1 />
        </Tab>
        <Tab
          tabStyle={{backgroundColor: '#009387'}}
          activeTabStyle={{backgroundColor: '#009387'}}
          textStyle={{color: '#ffffff'}}
          activeTextStyle={{color: '#ffffff'}}
          heading="Tab2">
          <Tab2 />
        </Tab>
        <Tab
          tabStyle={{backgroundColor: '#009387'}}
          activeTabStyle={{backgroundColor: '#009387'}}
          textStyle={{color: '#ffffff'}}
          activeTextStyle={{color: '#ffffff'}}
          heading="Tab3">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default TabScreen
