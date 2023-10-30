import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<Cart />} path="/cart" />
      </Routes>
    </div>
  );
}

export default App;
