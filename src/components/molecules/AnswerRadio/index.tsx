import { RadioButton } from '@/components/atoms'
import styled from '@emotion/styled'
import { ToggleButtonGroupProps, ToggleButtonGroup } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

interface IAnswer {
  label: string
  value: string
}

interface IProps extends ToggleButtonGroupProps {}

const AnswerRadio: React.FC<IProps> = ({ ...rest }) => {
  const key = uuidv4()
  const answerList: IAnswer[] = [
    {
      label: '매우 그렇다',
      value: '1',
    },
    {
      label: '그렇다',
      value: '2',
    },
    {
      label: '보통이다',
      value: '3',
    },
    {
      label: '그렇지 않다',
      value: '4',
    },
    {
      label: '매우 그렇지 않다',
      value: '5',
    },
  ]

  return (
    <RadioContainer orientation="vertical" fullWidth exclusive {...rest}>
      {answerList.map((answer) => (
        <RadioButton key={key + answer.value} value={answer.value} label={answer.label} />
      ))}
    </RadioContainer>
  )
}

const RadioContainer = styled(ToggleButtonGroup)`
  border-radius: 35px;
`

export default AnswerRadio