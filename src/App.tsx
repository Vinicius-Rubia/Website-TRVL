import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/pages/Home";

import "./App.css";
import { Services } from "./components/pages/Services";
import { SignUp } from "./components/pages/SignUp";
import { Products } from "./components/pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
