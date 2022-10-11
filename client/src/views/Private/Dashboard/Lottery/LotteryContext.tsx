import { createContext, useState } from 'react'

interface LotteryChildrenI {
  children: JSX.Element | JSX.Element[]
}
interface LotteryContextI {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
}
const LotteryContext = createContext<LotteryContextI | null>(null)

const LotteryProvider = ({ children }: LotteryChildrenI) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const value = { open, handleOpen, handleClose }
  return (
    <>
      <LotteryContext.Provider value={value}>{children}</LotteryContext.Provider>
    </>
  )
}

export { LotteryProvider }
export default LotteryContext
