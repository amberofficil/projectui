import React from 'react';

const products = [
  {
    name: "Cantilever chair",
    price: "$26.00",
    image: "/box for image.png",
  },
  {
    name: "Cantilever chair",
    price: "$26.00 ",
    image: "/box for image (1).png",
  },
  {
    name: "Cantilever chair",
    price: "$26.00 ",
    image: "/box for image (2).png",
  },
  {
    name: "Cantilever chair",
    price: "$26.00 ",
    image: "/box for image (3).png",
  },
];

export default function TrendingProducts() {
  return (
    <section className=" py-10 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
      Trending Products
      </h2>
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="w-270 h-350 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500"></p>
              <p className="text-lg font-bold text-gray-800 mt-2">
                {product.price}
              </p>
            </div> 
          </div>
        ))}
        </div>
        </div>
  </section>
)
}
