import { Route, Routes } from 'react-router'
import './App.css'
import Card from './pages/Card'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SingleProduct from './pages/SingleProduct'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        <Route path='/cart' element={<Card/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
