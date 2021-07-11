import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container, TitleTxt, BodyTxt } from './styles';

import api from '../../Services/api'

interface Posts {
  userId: any
  id: any
  title: string
  body: string
}

const PostCard = ({ UUID }: { UUID: number }) => {

  // Loading dos Dados
  const [loading, setLoading] = useState(true)

  // Consumindo API Posts
  const [post, setPost] = useState<Posts[]>([])
  useEffect(() => {
    try {
      api.get(`posts?userId=` + UUID).then(
        res => setPost(res.data)
      ).finally(() => setLoading(false))
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    loading ? <ActivityIndicator /> :
      <FlatList
        data={post}
        keyExtractor={({ userId }) => userId}
        renderItem={({ item }) => (
          <Container>
            <TitleTxt>{item.title}</TitleTxt>
            <BodyTxt>{item.body}</BodyTxt>
          </Container>
        )}
      />
  )
}

export default PostCard;