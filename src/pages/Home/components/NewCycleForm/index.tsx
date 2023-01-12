import { useContext } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

import {
  ButtonIconMinutes,
  FormContainer,
  MinutesAmountContainer,
  MinutesAmountInput,
  TaskInput,
} from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register, setValue, getValues } = useFormContext()

  function handleDecreaseMinutes() {
    const minutesValue = getValues('minutesAmount')

    let minutesDecrease = minutesValue
    if (minutesDecrease > 5) {
      minutesDecrease = minutesDecrease - 5
    }
    setValue('minutesAmount', minutesDecrease)
  }

  function handleIncreaseMinutes() {
    const minutesValue = getValues('minutesAmount')

    let minutesIncrease = minutesValue
    if (minutesIncrease < 60) {
      minutesIncrease = minutesIncrease + 5
    }
    setValue('minutesAmount', minutesIncrease)
  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="📖 Estudar " />
        <option value="🧑‍💻 Trabalhar em " />
        <option value="☕️ Pausa/Descanso" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>

      <MinutesAmountContainer>
        <ButtonIconMinutes onClick={handleDecreaseMinutes} type="button">
          <Minus size={15} />
        </ButtonIconMinutes>
        <MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          {...register('minutesAmount', { valueAsNumber: true })}
          disabled={!!activeCycle}
        />
        <ButtonIconMinutes onClick={handleIncreaseMinutes} type="button">
          <Plus size={15} />
        </ButtonIconMinutes>
      </MinutesAmountContainer>

      <span>minutos.</span>
    </FormContainer>
  )
}
