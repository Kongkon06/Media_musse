import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import { Categories } from './Pages/Categories'
import { Agent } from './Pages/Agent'
import { Auth } from './Pages/Auth'
import { RecoilRoot } from 'recoil'

function App() {

  return <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Product/:id'></Route>
      <Route path='/Auth' element={<Auth/>}></Route>
      <Route path='/Categories' element={<Categories/>}></Route>
      <Route path='/Agent' element={<Agent/>}></Route>
    </Routes>
    </BrowserRouter></RecoilRoot>
}

export default App
