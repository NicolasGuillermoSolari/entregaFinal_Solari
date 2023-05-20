import "./App.css";
import Counter from "./components/counter/Counter";
import Navbar from "./components/navBar/NavBar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nosotros } from "./components/navBar/Nosotros";

function App() {
  return (
    <div className="App">
      <h1>Prueba</h1>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemDetailContainer />} />
          <Route
            path="/productos/:category"
            element={<ItemDetailContainer />}
          />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>

        <Counter />
      </BrowserRouter>
    </div>
  );
}

export default App;
