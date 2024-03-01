
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles.css"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
