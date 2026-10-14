import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Orders from './components/Orders';
import Products from './components/Products';

function App() {
  return (
    <>
    <Home />
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App
