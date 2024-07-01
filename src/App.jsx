import NavBar from "./components/NavBar/NavBar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Item from "./components/ItemListContainer/Item"


function App() {
  

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/detalle/:idProducto" element= {<ItemDetailsContainer />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
