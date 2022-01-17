import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`

export const Wrapper = styled.View`
  background-color: #eee;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 5px solid #000;
  border-radius: 10px;
`

export const Title = styled.Text`
  font-size: 45px;
  font-weight: bold;
`

export const Label = styled.Text`
  color: #eee;
  font-size: 35px;
  font-weight: bold;
`

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 5px;
  border: 5px solid #000;
  border-radius: 10px;
`

export const EasyLevelButton = styled(Button)`
  background-color: #0c0;
`

export const NormalLevelButton = styled(Button)`
  background-color: #00f;
`

export const HardLevelButton = styled(Button)`
  background-color: #ff7f00;
`
