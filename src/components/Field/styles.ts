import styled from 'styled-components/native'

import { params } from '../../util/params'

const { blockSize, borderSize, fontSize } = params

const backgroundColor = '#999'
const leftTopColor = '#ccc'
const rightBottomColor = '#333'

type FieldWrapperProps = {
  isRegularField: boolean
  isOpenedField: boolean
  isExplodedField: boolean
}

export const FieldWrapper = styled.View<FieldWrapperProps>`
  height: ${blockSize}px;
  width: ${blockSize}px;
  border-width: ${borderSize}px;

  ${({ isRegularField }) =>
    isRegularField &&
    `
  background-color: ${backgroundColor};
  border-left-color: ${leftTopColor};
  border-top-color: ${leftTopColor};
  border-right-color: ${rightBottomColor};
  border-bottom-color: ${rightBottomColor};
  `}

  ${({ isOpenedField, isExplodedField }) =>
    (isOpenedField || isExplodedField) &&
    `
  align-items: center;
  justify-content: center;
  background-color: ${isOpenedField ? backgroundColor : '#f00'};
  border-color: ${isOpenedField ? '#777' : '#f00'};
  `}
`

type LabelProps = {
  color: string
}

export const Label = styled.Text<LabelProps>`
  font-weight: bold;
  font-size: ${fontSize}px;
  color: ${props => props.color};
`
