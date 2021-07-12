import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { Container, CreateNewPost, TitleTxt, BodyTxt } from './styles';
import { AntDesign } from "@expo/vector-icons";

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
      console.log(`the item with id ${postId} has been deleted`)
    } catch (err) {
      console.error(err)
    }
  }

  // Criar Novo Post
  const createNewPost = async (postId: number) => {
    const newpost = {
      userId: postId,
      title: 'Hello',
      body: 'World'
    }
    try {
      const res = await api.post('posts', newpost)
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    loading ? <ActivityIndicator /> :
      <>
        <CreateNewPost onPress={() => createNewPost(UUID)}><AntDesign name="plus" size={22} color="#f2f2f2" /></CreateNewPost>
        <FlatList
          data={post}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Container onLongPress={() => delPost(item.id)}>
              <TitleTxt>{item.title}</TitleTxt>
              <BodyTxt>{item.body}</BodyTxt>
            </Container>
          )}
        />
      </>
  )
}

export default PostCard;