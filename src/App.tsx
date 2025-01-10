import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import { InstrumentCards } from './Pages/Categories'
import { Agent } from './Pages/Agent'
import { Auth } from './Pages/Auth'

function App() {

  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Product/:id'></Route>
      <Route path='/Auth' element={<Auth/>}></Route>
      <Route path='/Categories' element={<InstrumentCards/>}></Route>
      <Route path='/Agent' element={<Agent/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App
