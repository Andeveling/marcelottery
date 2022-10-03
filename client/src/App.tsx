import { Navbar, Login } from '@/components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/views'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
