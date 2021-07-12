import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container, TitleTxt, BodyTxt } from './styles';

import api from '../../Services/api'

interface Posts {
  userId: number
  id: number
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
      api.get('posts?userId=' + UUID).then(
        res => setPost(res.data)
      ).finally(() => setLoading(false))
    } catch (err) {
      console.error(err)
    }
  }, [])

  // Deletar post
  const delPost = async (postId: number) => {
    try {
      await api.delete('posts/' + postId)
    } catch (err) {
      console.error(err)
    }
  }

  // Criar Novo Post
  const [createPost, setCreatePost] = useState<Posts>()
  const newPost = async ({ pID, Ptitle, Pbody }: { pID: number, Ptitle: string, Pbody: string }) => {
    setCreatePost({
      'userId': UUID,
      'id': pID,
      'title': Ptitle,
      'body': Pbody,
    })
    try {
      const res = await api.post('posts' + createPost)
      return res.data
    } catch (err) {
      console.error(err)
    }
  }

  return (
    loading ? <ActivityIndicator /> :
      <FlatList
        data={post}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Container onPress={() => delPost(item.id)}>
            <TitleTxt>{item.title}</TitleTxt>
            <BodyTxt>{item.body}</BodyTxt>
          </Container>
        )}
      />
  )
}

export default PostCard;