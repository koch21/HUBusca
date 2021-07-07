import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container } from './styles';

import CardSearch from '../../Components/CardSearch/index';
import api from '../../Services/api'

interface User {
  id: any
  name: string
  email: string
}

interface Posts {
  userId: any
  id: any
  title: string
  body: string
}

const Home: React.FC = () => {
  // Loading dos Dados
  const [loading, setLoading] = useState(true)

  // Consumindo API Usuarios
  const [user, setUser] = useState<User[]>([])
  useEffect(() => {
    try {
      api.get(`users`).then(
        res => setUser(res.data)
      ).finally(() => setLoading(false))
    } catch (err) {
      console.error(err)
    }
  }, [])

  // Consumindo API Posts
  const [post, setPost] = useState<Posts[]>([])
  useEffect(() => {
    try {
      api.get(`posts`).then(
        res => setPost(res.data)
      ).finally(() => setLoading(false))
    } catch (err) {
      console.error(err)
    }
  }, [])

  // Concatenando Valores dos 2 arryas, para listar-los
  const mergeById = (array1, array2) =>
    array1.map(itm => ({
      ...array2.find(item => (item.userId === itm.id) && item),
      ...itm
    }));
  const result = mergeById(user, post)

  return (
    <Container>
      {
        loading ? <ActivityIndicator /> : (
          <FlatList
            data={result}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <CardSearch Name={'Nome: ' + item.name} Title={'Titulo: ' + item.title} Body={item.body} />
            )}
          />
        )
      }
    </Container>
  )
}

export default Home;