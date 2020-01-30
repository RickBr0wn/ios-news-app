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

export default function ListThumbnailExample() {
  const [response, error, isLoading] = useFetch(
    `${articles_url}?country=${country_code}&category=${category}`,
    {
      headers: { 'X-API-KEY': api_key },
    },
  )

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
            renderRow={newsItem => <NewsItem data={newsItem} />}
          />
        </Content>
      </Container>
    )
  }

  return null
}
