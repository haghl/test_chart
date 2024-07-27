import styled from '@emotion/styled'

const Button = styled.button`
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

  @media (max-width: 420px) {
    width: 100px;
    height: 50px;
    font-size: 15px;
  }
`

export default Button
