import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`

export const CoreMine = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 10px;
  background-color: black;
  align-items: center;
  justify-content: center;
`
export const HorizontalLine = styled.View`
  position: absolute;
  height: 3px;
  width: 20px;
  background-color: black;
`
export const VerticalLine = styled(HorizontalLine)`
  transform: rotate(90deg);
`
export const RightLine = styled(HorizontalLine)`
  transform: rotate(-45deg);
`
export const LeftLine = styled(HorizontalLine)`
  transform: rotate(45deg);
`
