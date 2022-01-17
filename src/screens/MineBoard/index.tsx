import React, { useState } from 'react'
import { Alert } from 'react-native'

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  getUsedFlagsAmount
} from '../../util/functions'

import { params } from '../../util/params'

import { MineField } from '../../components/MineField'
import { Header } from '../../components/Header'

import { LevelSelection } from '../LevelSelection'

import { Board, Container } from './styles'

export const MineBoard = () => {
  const columns = params.getColumnsAmount()
  const rows = params.getRowsAmount()

  // deve calcular a quantidade de minas
  const minesAmount = () => {
    return 0
  }

  const mineBoard = createMinedBoard(rows, columns, minesAmount())

  const [showLevelSelection, setShowLevelSelection] = useState(false)
  const [board, setBoard] = useState(mineBoard)

  // deve reinicar o estado do jogo
  const resetMinesState = () => {
  }

  const onOpenField = (row: number, column: number) => {
    const clonedBoard = cloneBoard(board)
    openField(clonedBoard, row, column)

    const hasUserLost = hadExplosion(clonedBoard)
    const hasUserWon = wonGame(clonedBoard)

    if (hasUserLost) {
      showMines(clonedBoard)
      Alert.alert('Sorry', 'You Lost!!')
    }

    if (hasUserWon) {
      Alert.alert('Congratulations!', 'You Won!!')
    }

    setBoard(clonedBoard)
  }

  const onSelectField = (row: number, column: number) => {
    const clonedBoard = cloneBoard(board)
    invertFlag(clonedBoard, row, column)
    const hasUserWon = wonGame(clonedBoard)

    if (hasUserWon) {
      Alert.alert('Congratulations!', 'You Won!!')
    }

    setBoard(clonedBoard)
  }

  // deve poder selecionar o nível do jogo
  const onLevelSelected = (level: number) => {
    //...
    resetMinesState()
  }

  return (
    <Container>
      <LevelSelection
        isVisible={showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelection(false)}
      />
      <Header
        remainingFlags={0} // deve calcular o número de flags restantes
        onNewGame={() => resetMinesState()}
        onFlagPress={() => setShowLevelSelection(true)}
      />
      <Board>
        <MineField
          board={board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </Board>
    </Container>
  )
}
