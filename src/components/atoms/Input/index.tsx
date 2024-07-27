import React, { InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlForId: string
  label: string
  width: number
}

const Input: React.FC<IProps> = ({ width, htmlForId, label, ...rest }) => {
  return (
    <InputWrap>
      <InputLabel htmlFor={htmlForId}>{label}</InputLabel>
      <InputEl id={htmlForId} width={width} {...rest} autoComplete="off" />
    </InputWrap>
  )
}
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 25px;

  @media (max-width: 420px) {
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;
    justify-content: center;
  }
`
const InputLabel = styled.label`
  font-size: 22px;
  font-weight: 500;
  color: #004c2f;

  @media (max-width: 420px) {
    font-size: 15px;
  }
`
const InputEl = styled.input<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 55px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #004c2f;
  font-size: 22px;
  &:focus-visible {
    outline-color: #004c2f;
  }

  @media (max-width: 420px) {
    width: 100%;
    height: 40px;
    font-size: 15px;
  }
`

export default Input
