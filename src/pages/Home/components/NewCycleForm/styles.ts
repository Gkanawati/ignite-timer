import styled from 'styled-components'

export const FormContainer = styled.div`
  width: calc(100% + 1.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  flex-wrap: wrap;
  font-weight: bold;

  @media (max-width: 767px) {
    & {
      width: 100%;
      justify-content: flex-start;
    }
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  @media (max-width: 767px) {
    & {
      font-size: 1rem;
    }
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled.input`
  width: 2.5rem;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
  }

  background: transparent;
  height: 2.5rem;
  border: 0;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme['green-500']};
  }
`

export const MinutesAmountContainer = styled.div`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const ButtonIconMinutes = styled.button`
  background: transparent;
  color: ${(props) => props.theme['gray-400']};
  border: none;
  width: 1rem;
  height: 1rem;
`
