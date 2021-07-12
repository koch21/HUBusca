import React, { useState } from "react";
import {
  Container,
  TrashButton,
  Bold,
  SearchBox,
  SearchButton,
  Input,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Animated, Dimensions } from "react-native";

const Header = ({ NumberOfItem, MenuFunction }: { NumberOfItem: string, MenuFunction: object }) => {
  const [isPress, setIsPress] = useState(true);

  const animation = new Animated.Value(40);
  const { width } = Dimensions.get('window');

  function onSearch() {
    Animated.spring(animation, {
      toValue: width * 0.7,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Container>
      <SearchBox style={{ width: animation }}>
        <Input autoFocus />
        <SearchButton onPress={onSearch} >
          <Ionicons name="search" size={22} color="#f2f2f2" />
        </SearchButton>
      </SearchBox>
      <TrashButton onPress={() => { isPress === true ? setIsPress(false) : setIsPress(true) }}>
        <Bold>{NumberOfItem}</Bold>
        <Ionicons name="ios-trash-outline" size={22} color="#f2f2f2" />
      </TrashButton>
    </Container>
  );
};

export default Header;