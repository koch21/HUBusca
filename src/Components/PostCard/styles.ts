import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: #1e1e1e;
  margin-top: 16px;
  padding: 12px;
  border-radius: 20px;
`;
export const FormContainer = styled.View`
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
export const SubmitButton = styled.TouchableOpacity`
  background-color: #555;
  padding: 6px 6px;
  border-radius: 20px;
  align-self: center;
`;
export const TitleTxt = styled.Text`
  color: #f2f2f2;
  margin-left: 12px;
  margin-top: 14px;

  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
`;
export const TitleInput = styled.TextInput.attrs({
  placeholderTextColor: "#777",
})`
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
export const BodyInput = styled.TextInput.attrs({
  placeholderTextColor: "#777",
})`
  color: #f2f2f2;
  margin-left: 12px;
  margin-top: 12px;

  font-family: Roboto;
  font-size: 14px;
`;
