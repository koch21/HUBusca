import React from "react";
import {
  Container,
  SearchBox,
  SearchButton,
  Input,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Animated, Dimensions } from "react-native";

const Header = ({ NumberOfItem, OnChangeText }: { NumberOfItem: string, OnChangeText: any }) => {

  // Busca animada
  const animation = new Animated.Value(40);
  const { width } = Dimensions.get('window');
  const onSearch = () => {
    Animated.spring(animation, {
      toValue: width * 0.92,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Container>
      <SearchBox style={{ width: animation }}>
        <Input autoFocus onChangeText={OnChangeText} />
        <SearchButton onPress={onSearch}>
          <Ionicons name="search" size={22} color="#f2f2f2" />
        </SearchButton>
      </SearchBox>
    </Container>
  );
};

export default Header;