/**
 * COMUNICAÇÃO ENTRE COMPONENTES:
 * 1. Passando Propriedades, ideal para poucas propriedades sendo passadas. Mas pode causar:
 *    => Prop Drilling -> Quando a gente tem MUITAS propriedades APENAS para comunicação entre componentes
 * 2. Context API -> Permite compartilharmos informacoes entre VÁRIOS componentes ao mesmo tempo
 */
import { createContext, useContext, useState } from 'react'

const CycleContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CycleContext)
  return (
    <>
      <h1>NewCycleForm: {activeCycle}</h1>
      <button onClick={() => setActiveCycle((prevState) => prevState + 1)}>
        Alterar ciclo ativo
      </button>
    </>
  )
}

function CountDown() {
  const { activeCycle } = useContext(CycleContext)
  return <h1>CountDown {activeCycle}</h1>
}

export default function Home() {
  const [activeCycle, setActiveCycle] = useState(0)
  return (
    <CycleContext.Provider value={{ activeCycle, setActiveCycle }}>
      <CountDown />
      <NewCycleForm />
    </CycleContext.Provider>
  )
}
