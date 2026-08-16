import { useState } from 'react'
import DisplayNavbar from './Navbar'
import { Route , Routes } from 'react-router-dom'
import Products from './products'
import Cart from './cart'

import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route>
        <DisplayNavbar/>
      </Route>
    </Routes>
    </>
    
)}

export default App
