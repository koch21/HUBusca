import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container, CardHeader, NameTxt, CreateNewPost } from './styles';
import { AntDesign } from "@expo/vector-icons";

import api from '../../Services/api'
import PostCard from '../PostCard';
import Header from '../Header';

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
  const [filteredUser, setFilteredUser] = useState<User[]>([])
  useEffect(() => {
    try {
      api.get('users').then(
        res => { setUser(res.data), setFilteredUser(res.data) }
      ).finally(() => setLoading(false))
    } catch (err) {
      console.error(err)
    }
  }, [])

  // Busca de Usuarios
  const [search, setSearch] = useState('')
  const searchUser = (text: string) => {
    if (text) {
      const userFilterd = user.filter(item => {
        const userData = item.name ? item.name.toLowerCase() : ''.toLowerCase()
        const textData = text.toLowerCase()
        return userData.indexOf(textData) > -1
      })
      setFilteredUser(userFilterd)
      setSearch(text)
    } else {
      setFilteredUser(user)
      setSearch(text)
    }
  }

  // Criar Novo Post


  return (
    loading ? <ActivityIndicator /> :
      <>
        <Header OnChangeText={(text: string) => searchUser(text)} />
        <FlatList
          data={filteredUser}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Container>
              <CardHeader>
                <NameTxt>{item.name}</NameTxt>
              </CardHeader>
              <PostCard UUID={item.id} />
            </Container>
          )}
        />
      </>
  )
}

export default UserCard;