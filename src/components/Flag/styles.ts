import styled from "styled-components/native"

const dark = '#222', position = 'absolute'

export const Container = styled.View`
  margin-top: 2px;
`
export const RedFlag = styled.View`
  position: ${position};
  height: 5px;
  width: 6px;
  background-color: #f00;
  margin-left: 3px;
`
export const RedFlagPole = styled.View`
  position: ${position};
  height: 14px;
  width: 2px;
  background-color: ${dark};
  margin-left: 9px;
`
export const BaseOne = styled.View`
  position: ${position};
  height: 2px;
  width: 6px;
  background-color: ${dark};
  margin-left: 7px;
  margin-top: 10px;
`

export const BaseTwo = styled.View`
  position: ${position};
  height: 2px;
  width: 10px;
  background-color: ${dark};
  margin-left: 5px;
  margin-top: 12px;
`
export const BiggerRedFlag = styled(RedFlag)`
  height: 10px;
  width: 14px;
  margin-left: 3px;
`
export const BiggerRedFlagPole = styled(RedFlagPole)`
  height: 28px;
  width: 4px;
  margin-left: 16px;
`

export const BiggerBaseOne = styled(BaseOne)`
  height: 4px;
  width: 12px;
  margin-left: 12px;
  margin-top: 20px;
`

export const BiggerBaseTwo = styled(BaseTwo)`
  height: 4px;
  width: 20px;
  margin-left: 8px;
  margin-top: 24px;
`