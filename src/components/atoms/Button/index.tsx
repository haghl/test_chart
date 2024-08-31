import styled from '@emotion/styled'
import { FC } from 'react'

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return <ButtonDiv {...props}>{props.children}</ButtonDiv>
}

const ButtonDiv = styled.button`
  width: 155px;
  height: 65px;
  border-radius: 15px;
  background: #004c2f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;

  @media (max-width: 450px) {
    width: 100px;
    height: 50px;
    font-size: 15px;
  }
`

export default Button
