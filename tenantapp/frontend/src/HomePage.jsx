import React from "react";

const categories = ["Fashion", "Electronics", "Home & Living", "Beauty", "Toys"];
const products = [
  { id: 1, name: "Product 1", price: 29.99 },
  { id: 2, name: "Product 2", price: 49.99 },
  { id: 3, name: "Product 3", price: 19.99 },
  { id: 4, name: "Product 4", price: 99.99 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white p-8 md:p-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Codei9 Ecommerce
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Discover amazing products across all categories
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="py-8 md:py-16 px-4 md:px-16">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg text-center cursor-pointer transition"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-8 md:py-16 px-4 md:px-16">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200 mb-4 rounded"></div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-2">${product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
