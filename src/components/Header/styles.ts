import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #aaa;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
`

export const FlagWrapper = styled.View`
  flex-direction: row;
`

export const FlagButton = styled.TouchableOpacity`
  margin-top: 10px;
  min-width: 30px;
`

export const RemainingFlags = styled.Text`
  font-size: 35px;
  font-weight: bold;
  padding-top: 5px;
  margin-left: 5px;
`

export const NewGameButton = styled.TouchableOpacity`
  background-color: #585858;
  padding: 5px;
  border: 5px solid #000;
  border-radius: 10px;
  margin-left: 145px;
`

export const Label = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`