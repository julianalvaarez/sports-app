import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { products } from "../data";
import { NavBar } from "../components/NavBar";
import { ProductsPage } from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import Contacto from "../components/Contacto";

export const RouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        {products.map((product) => (
            <Route key={product.id} path={`product/${product.nombre}`} element={<ProductPage producto={product} />} />
        ))}
        {products.map((product) => (
            <Route key={product.id} path={`products/product/${product.nombre}`} element={<ProductPage producto={product} />} />
        ))}
      </Routes>
      <Contacto />
    </div>
  );
};
