import { Route, Routes } from 'react-router-dom'

interface PropsI {
  children: JSX.Element[] | JSX.Element
}

export default function RoutesWithNoFound({ children }: PropsI): JSX.Element {
  return (
    <Routes>
      {children}
      <Route path='*' element={<h1>404 not Found</h1>}></Route>
    </Routes>
  )
}
