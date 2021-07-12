import React from 'react';
import { Container } from './styles';

import UserCard from '../../Components/UserCard/index';
import Header from '../../Components/Header';

const Home: React.FC = () => {
  return (
    <Container >
      <UserCard />
    </Container >
  )
}

export default Home;