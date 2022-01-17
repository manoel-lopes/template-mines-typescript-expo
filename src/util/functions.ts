import { Board, Field } from './types'

const createBoard = (rows: number, columns: number): Board[][] => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, column) => {
          return {
            row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0
          }
        })
    })
}

const spreadMines = (board: Board[][], minesAmount: number) => {
  const rows = board.length
  const columns = board[0].length
  let minesPlanted = 0

  while (minesPlanted < minesAmount) {
    const selectedRow = parseInt(`${Math.random() * rows}`, 10)
    const selectedColumn = parseInt(`${Math.random() * columns}`, 10)

    if (!board[selectedRow][selectedColumn].mined) {
      board[selectedRow][selectedColumn].mined = true
      minesPlanted++
    }
  }
}

const createMinedBoard = (
  rows: number,
  columns: number,
  minesAmount: number
) => {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)
  return board
}

const cloneBoard = (board: Board[][]): Board[][] => {
  return board.map(rows => {
    return rows.map(field => {
      return { ...field }
    })
  })
}

const getNeighbors = (board: Board[][], row: number, column: number) => {
  const neighbors: Board[] = []
  const rows = [row - 1, row, row + 1]
  const columns = [column - 1, column, column + 1]

  rows.forEach(r => {
    columns.forEach(c => {
      const different = r !== row || c !== column
      const validRow = r >= 0 && r < board.length
      const validColumn = c >= 0 && c < board[0].length

      if (different && validRow && validColumn) {
        neighbors.push(board[r][c])
      }
    })
  })

  return neighbors
}

const isASafeNeighborhood = (board: Board[][], row: number, column: number) => {
  const safes = (result: boolean, neighbor: { mined: boolean }) =>
    result && !neighbor.mined

  return getNeighbors(board, row, column).reduce(safes, true)
}

const openField = (board: Board[][], row: number, column: number) => {
  const field = board[row][column]

  if (!field.opened) {
    field.opened = true

    if (field.mined) {
      field.exploded = true
    } else if (isASafeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(neighbors =>
        openField(board, neighbors.row, neighbors.column)
      )
    } else {
      const neighborsOnField = getNeighbors(board, row, column)
      field.nearMines = neighborsOnField.filter(
        neighbors => neighbors.mined
      ).length
    }
  }
}

const getFields = (board: Board[][]): Field[] => {
  return [].concat(...board)
}

// criar lógica para dterminar se a mina explodiu
const hadExplosion = (board: Board[][]) => {
  return false
}

const getPendingFields = (field: Field) => {
  return (field.mined && !field.flagged) || (!field.mined && !field.opened)
}

// criar lógica da função para determinar se usuário ganhou o jogo
const wonGame = (board: Board[][]) => {
  return false
}

const showMines = (board: Board[][]) => {
  getFields(board)
    .filter(field => field.mined)
    .forEach(field => (field.opened = true))
}

const invertFlag = (board: Board[][], row: number, column: number) => {
  const field = board[row][column]
  field.flagged = !field.flagged
}

// criar lógica para pegar o número de flags utilizadas
const getUsedFlagsAmount = (board: Board[][]) => {
  return 0
}

export {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  getUsedFlagsAmount
}
