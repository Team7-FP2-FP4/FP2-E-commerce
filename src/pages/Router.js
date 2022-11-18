import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Product, Cart, Login, Checkout, PageNotFound } from "./";

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
  );
}
