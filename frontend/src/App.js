
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles.css"
import Login from "./pages/login/Login";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
