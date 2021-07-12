import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: #1e1e1e;
  margin-top: 16px;
  padding: 12px;
  border-radius: 20px;
`;
export const CreateNewPost = styled.TouchableOpacity`
  background-color: #555;
  position: absolute;
  align-self: flex-end;
  padding: 6px 6px;
  border-radius: 20px;
`;
export const TitleTxt = styled.Text`
  color: #f2f2f2;
  margin-left: 12px;
  margin-top: 14px;

  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
`;
export const BodyTxt = styled.Text`
  color: #f2f2f2;
  margin-left: 12px;
  margin-top: 6px;

  font-family: Roboto;
  font-size: 14px;
`;
