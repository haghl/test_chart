import styled from '@emotion/styled'
import { ToggleButton, ToggleButtonProps } from '@mui/material'

interface IProps extends ToggleButtonProps {
  label: string
}

const RadioButton: React.FC<IProps> = ({ label, ...rest }) => {
  return <Radio {...rest}>{label}</Radio>
}

const Radio = styled(ToggleButton)`
  justify-content: flex-start;
`

export default RadioButton
