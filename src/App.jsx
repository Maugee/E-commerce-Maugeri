import NavBar from "./components/NavBar/NavBar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./Context/CartContext"
import Carrito from "./components/Carrito/Carrito"
import Verificar from "./components/Verificar/Verificar"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App() {
  
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <ToastContainer theme="dark" />
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/detalle/:idProducto" element= {<ItemDetailsContainer />} />
          <Route path="/carrito" element= { <Carrito />} />
          <Route path="/checkout" element={ <Verificar/> } />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
