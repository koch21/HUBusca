import { Animated, TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #242424;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-top: 12%;
  padding-bottom: 16px;
`;
export const SearchBox = styled(Animated.View)`
  background-color: #333;
  justify-content: center;
  height: 40px;
  width: 80px;
  margin-left: 16px;
  border-radius: 30px;
`;
export const Input = styled(TextInput)`
  color: #999;
  flex: 1;
  margin-left: 20px;
`;
export const SearchButton = styled.TouchableOpacity`
  background-color: #555;
  position: absolute;
  width: 40px;
  height: 40px;
  right: 0px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const TrashButton = styled.TouchableOpacity`
  color: #f2f2f2;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-right: 16px;
`;
export const Bold = styled.Text`
  color: #f2f2f2;
  font-size: 18px;
  font-weight: bold;
  margin-right: 4px;
`;
