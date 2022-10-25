import { PropsI } from '@/types'
import { ChangeEvent, createContext, useState } from 'react'

interface RaffleContextI {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  handleChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export const RaffleContext = createContext<RaffleContextI | null>(null)

const RaffleContextProvider = ({ children }: PropsI) => {
  const [search, setSearch] = useState<string>('')
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  const values = { search, setSearch, handleChangeSearch }
  return <RaffleContext.Provider value={values}>{children}</RaffleContext.Provider>
}

export { RaffleContextProvider }
