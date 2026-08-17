import DisplayNavbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './products'
import { CartProvider } from './cart'

import './App.css'

function App() {
  return (
    <CartProvider>
      <DisplayNavbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </CartProvider>
  )
}

export default App