import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Places from './Pages/Places'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Component/navbar'


function App() {
  return (
    <BrowserRouter>
    <>
      <Navigation/>
      

      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/places'element={ <Places/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
        
    </>
    </BrowserRouter>
  )
}

export default App
