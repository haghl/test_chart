import styled from '@emotion/styled'
import { ToggleButton, ToggleButtonProps } from '@mui/material'

interface IProps extends ToggleButtonProps {
  label: string
}

const RadioButton: React.FC<IProps> = ({ label, ...rest }) => {
  return <Radio {...rest}>{label}</Radio>
}

const Radio = styled(ToggleButton)`
  padding: 15px 25px;
  justify-content: flex-start;
  border-radius: 35px;
  border-color: #004c2f;
  font-size: 18px;
  color: #004c2f;

  &:is(.Mui-selected, :hover) {
    border-color: #004c2f;
    background-color: #e4efe4;
  }
`

export default RadioButton
