import React from 'react'

import { Board } from '../../util/types'

import { Field } from '../Field'

import { Columns, Rows } from './styles'

type MineFiledProps = {
  board: Board[][]
  onOpenField: (row: number, columns: number) => void
  onSelectField: (row: number, columns: number) => void
}

export const MineField = ({
  board,
  onOpenField,
  onSelectField
}: MineFiledProps) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => onOpenField(r, c)}
          onSelect={() => onSelectField(r, c)}
        />
      )
    })
    return <Columns key={r}>{columns}</Columns>
  })
  return <Rows>{rows}</Rows>
}

