
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles.css"
import Login from "./pages/login/Login";
import CheckoutPage from "./pages/checkout/CheckoutPage";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/checkout" Component={CheckoutPage} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
