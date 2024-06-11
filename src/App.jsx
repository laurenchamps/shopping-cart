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
  const [error, setError] = useState('');

  const [cart, setCart] = useState([]);

  const totalItems = getCartQty();
  console.log(totalItems);

  function handleAddProducts(product) {
    setCart((curItems) => {
      if (curItems.find((item) => item.id === product.id) == null) {
        return [...curItems, product];
      } else {
        return curItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + product.quantity };
          } else {
            return item;
          }
        });
      }
    });
  }

  function updateItemQty(updatedItem) {
    setCart((curItems) => {
      return curItems.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        } else return item;
      });
    });
  }

  function incrementQty(productId) {
    setCart((curItems) => {
      return curItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        } else return item;
      });
    });
  }

  function getItemQty(productId) {
    return cart.find((item) => item.id === productId).quantity;
  }

  function decrementQty(productId) {
    // If current product has only 1 item remaining, remove from cart
    if (getItemQty(productId) === 1) {
      console.log(productId);
      setCart((curItems) => {
        return curItems.filter((item) => item.id !== productId);
      });
    } else {
      // Otherwise decrement quantity
      setCart((curItems) => {
        return curItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        });
      });
    }
  }

  function getCartQty() {
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);
    console.log(total);
    return total;
  }

  function deleteItem(productId) {
    setCart((curItems) => curItems.filter((item) => item.id !== productId));
  }

  useEffect(function () {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch('https://fakestoreapi.com/products?limit=4', {
          signal: controller.signal,
        });

        if (!res.ok)
          throw new Error('Something went wrong with fetching products');

        const data = await res.json();
        setProducts(data);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();

    return function () {
      controller.abort();
      console.log('Clean up');
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage totalItems={totalItems} />} />
        <Route path="about" element={<About />} />
        <Route
          path="shop"
          element={
            <Shop products={products} onAddProducts={handleAddProducts} />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              products={products}
              updateItemQty={updateItemQty}
              incrementQty={incrementQty}
              decrementQty={decrementQty}
              deleteItem={deleteItem}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
