import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container, NameTxt } from './styles';

import api from '../../Services/api'
import PostCard from '../PostCard';

interface User {
  id: number
  name: string
  email: string
  post: object
}

const UserCard = () => {

  // Loading dos Dados
  const [loading, setLoading] = useState(true)

  // Consumindo API Usuarios
  const [user, setUser] = useState<User[]>([])
  useEffect(() => {
    try {
      api.get('users').then(
        res => setUser(res.data)
      ).finally(() => setLoading(false))
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    loading ? <ActivityIndicator /> :
      <FlatList
        data={user}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Container>
            <NameTxt>{item.name}</NameTxt>
            <PostCard UUID={item.id} />
          </Container>
        )}
      />
  )
}

export default UserCard;