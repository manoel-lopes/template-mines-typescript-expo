export type Board = {
  row: number
  column: number
  mined: boolean
  opened: boolean
  flagged: boolean
  exploded: boolean
  nearMines: number
}

export type Field = {
  mined: boolean
  opened: boolean
  flagged: boolean
  exploded: boolean
  nearMines: number
  onOpen: () => void
  onSelect: () => void
}
