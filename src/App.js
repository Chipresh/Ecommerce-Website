import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route element={<Login/>} path="/"/>
      <Route element={<Home/>} path="/home"/>
     </Routes>
    </div>
  );
}

export default App;
