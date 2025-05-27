// HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Failed to fetch products:', error));
  }, []);

  const addToCart = (productId) => {
    const existing = cart.find(item => item.id === productId);
    let updatedCart;

    if (existing) {
      updatedCart = cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { id: productId, quantity: 1 }];
    }

    setCart(updatedCart);

    const productInCart = updatedCart.find(item => item.id === productId);

    axios.post('http://localhost:5000/add-to-cart', {
      itemId: productId,
      quantity: productInCart.quantity,
    }).catch(error => console.error('Failed to add to cart:', error));
  };

  const checkout = () => {
    axios.post('http://localhost:5000/checkout', {
      items: cart
    })
    .then(response => {
      alert('Checkout successful!');
      setCart([]);
    })
    .catch(error => {
      console.error('Checkout failed:', error);
    });
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="bg-blue-900 text-white py-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">Welcome to JAYA</h1>
        <p className="text-center text-sm mt-1">Shop the latest tech gadgets and accessories</p>
      </header>

      <main className="px-6 py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">Explore Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => {
            const itemInCart = cart.find(item => item.id === product.id);
            const quantity = itemInCart ? itemInCart.quantity : 0;

            return (
              <ProductCard
                key={product.id}
                product={product}
                count={quantity}
                addToCart={addToCart}
              />
            );
          })}
        </div>

        {cart.length > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={checkout}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg text-lg transition"
            >
              Checkout ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;
