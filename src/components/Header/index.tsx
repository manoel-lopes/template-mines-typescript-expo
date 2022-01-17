import React from 'react'

import { Flag } from '../Flag'

import {
  Container,
  FlagWrapper,
  FlagButton,
  RemainingFlags,
  NewGameButton,
  Label
} from './styles'

type HeaderProps = {
  remainingFlags: number
  onFlagPress: (e: unknown) => void
  onNewGame: (e: unknown) => void
}

export const Header = ({ onFlagPress, onNewGame }: HeaderProps) => {
  return (
    <Container>
      <FlagWrapper>
        <FlagButton onPress={onFlagPress}>
          <Flag bigger />
        </FlagButton>
        <RemainingFlags>0</RemainingFlags>
      </FlagWrapper>
      <NewGameButton onPress={onNewGame}>
        <Label>New Game</Label>
      </NewGameButton>
    </Container>
  )
}
