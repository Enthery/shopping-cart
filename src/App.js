import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
