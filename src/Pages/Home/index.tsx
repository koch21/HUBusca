import React from 'react';
import { Container } from './styles';

import UserCard from '../../Components/UserCard/index';

const Home: React.FC = () => {
  return (
    <Container >
      <UserCard />
    </Container >
  )
}

export default Home;