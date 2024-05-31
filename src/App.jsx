import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import { useEffect, useState } from 'react';

// const BASE_URL = 'http://localhost:9000';

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [cart, setCart] = useState([]);

  function handleAddProducts(product) {
    setCart((cart) => [...cart, product]);
  }

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await fetch('https://fakestoreapi.com/products?limit=4');
        const data = await res.json();
        setProducts(data);
      } catch {
        alert('There was an error loading data');
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route
          path="shop"
          element={
            <Shop products={products} onAddProducts={handleAddProducts} />
          }
        />
        <Route
          path="cart"
          element={<Cart cart={cart} products={products} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
