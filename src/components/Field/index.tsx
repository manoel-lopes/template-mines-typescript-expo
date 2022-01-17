import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { Mine } from '../Mine'
import { Flag } from '../Flag'

import { FieldWrapper, Label } from './styles'

import { Field as FieldProps } from '../../util/types'

export const Field = ({
  mined,
  opened,
  nearMines,
  exploded,
  flagged,
  onOpen,
  onSelect
}: FieldProps) => {
  const color = '#333' // alterar a cor do label de acordo com o número de minas

  return (
    <TouchableWithoutFeedback
      onPress={() => onOpen()}
      onLongPress={() => onSelect()}
    >
      <FieldWrapper
        isRegularField={!opened && !exploded}
        isExplodedField={exploded}
        isOpenedField={opened && !exploded}
      >
        {!mined && opened && nearMines > 0 && (
          <Label color={color}>{nearMines}</Label>
        )}
        {mined && opened && <Mine />}
        {flagged && !opened && <Flag />}
      </FieldWrapper>
    </TouchableWithoutFeedback>
  )
}
