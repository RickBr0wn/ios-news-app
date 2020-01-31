import React, { Component } from 'react'
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
import { getArticles } from '../../service/news'
import { useFetch } from '../../service/useFetch'
import {
  articles_url,
  api_key,
  category,
  country_code,
} from '../../config/rest.config.js'
import NewsItem from '../../components/NewsItem'
import Modal from '../../components/Modal'

export default function() {
  const [visibility, setVisibility] = React.useState(false)
  const [modalArticleData, setModalArticleData] = React.useState({})
  const [response, error, isLoading] = useFetch(
    `${articles_url}?language=en&country=${country_code}&category=sport&sortBy=publishedAt&apiKey=ba98cb2d7bf046f68632092002153f79`,
  )

  const handleNewsItemPress = article => {
    setVisibility(true)
    setModalArticleData(article)
  }

  const handleNewsItemClose = () => {
    setVisibility(false)
    setModalArticleData({})
  }

  const handleShare = article => {}

  if (isLoading) {
    // TODO: add spinner from native-base
    return <Text>Loading DATA</Text>
  }

  if (error) {
    return <Alert>There has been an error 😒{error.message}</Alert>
  }

  if (response && response.data) {
    console.log(response.data.articles)
    return (
      <Container>
        <Content>
          <List
            dataArray={response.data.articles}
            renderRow={newsItem => (
              <NewsItem
                handleNewsItemPress={handleNewsItemPress}
                item={newsItem}
              />
            )}
          />
        </Content>
        <Modal
          visibility={visibility}
          showModal={setVisibility}
          article={modalArticleData}
          onClose={handleNewsItemClose}
          share={handleShare}
        />
      </Container>
    )
  }

  return <Text>loading</Text>
}
