// ProductCard.jsx
import React from 'react';

function ProductCard({ product, count, addToCart }) {
  return (
    <div className="border rounded-lg shadow-md bg-white hover:shadow-lg transition-all">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-900">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 text-blue-700 font-medium">₹{product.price}</p>

        <button
          onClick={() => addToCart(product.id)}
          className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded transition"
        >
          Add to Cart {count > 0 && <span className="ml-2 text-sm">({count})</span>}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
