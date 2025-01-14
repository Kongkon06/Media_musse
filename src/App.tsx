import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import { Categories } from './Pages/Categories'
import { Agent } from './Pages/Agent'
import { Auth } from './Pages/Auth'
import { RecoilRoot } from 'recoil'
import {ProductPage} from './Pages/Product'
import { Brands } from './Pages/Brands'
import { ProductList } from './Pages/Productlist'
import { Sidebar } from 'lucide-react'

function App() {

  return <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Product/:id'></Route>
      <Route path='/Auth' element={<Auth/>}></Route>
      <Route path='/Categories' element={<Categories/>}></Route>
      <Route path='/Agent' element={<Agent/>}></Route>
      <Route path='/Product' element={<ProductPage/>}></Route>
      <Route path='/Products/:id' element={<ProductList/>}></Route>
      <Route path='/Brands' element={<Brands/>}></Route>
    </Routes>
    </BrowserRouter></RecoilRoot>
}

export default App
