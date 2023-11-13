import React from "react";
import ReactDOM from "react-dom/client";
import Page404 from "./pages/404/Page404";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Roles from "./pages/Roles/Roles";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sales from "./pages/Sales/sales";
import Menu from "./pages/Menu/Menu";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index exact element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/about-us" exact element={<About />} />
        <Route path="/roles" exact element={<Roles />} />
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/sales" exact element={<Sales />} />
        <Route path="/menu-manajement" exact element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
