import React from 'react'
import { Modal } from 'react-native'

import {
  Container,
  Wrapper,
  Title,
  Label,
  EasyLevelButton,
  NormalLevelButton,
  HardLevelButton
} from './styles'

type LevelSelectionProps = {
  onCancel: () => void
  isVisible: boolean
  onLevelSelected: (level: number) => void
}

// deve criar o modal de seleção de nível com os seguintes valores:
// Easy - 0.1
// Normal - 0.2
// Hard - 0.3

export const LevelSelection = ({
  onCancel,
  isVisible
}: LevelSelectionProps) => {
  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType="slide"
      transparent
    >
      <Container>
        <Wrapper>
          <Title>Select Level</Title>
        </Wrapper>
      </Container>
    </Modal>
  )
}
