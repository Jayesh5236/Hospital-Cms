import { useState } from "react";

import "./App.css";
import Nav from "./Components/Layouts/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Pages/User/Register";
import Login from "./Components/Pages/User/Login";
import HomePage from "./Components/Pages/others/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
