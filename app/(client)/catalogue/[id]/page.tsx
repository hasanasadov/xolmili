import React from "react";

const ProductDetailPage = () => {
  const product = {
    id: 1,
    name: "Product Name",
    image: "https://via.placeholder.com/150",
    description: "This is a detailed description of the product.",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover mb-4"
      />
      <p className="text-lg mb-4">{product.description}</p>
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
        Ətraflı
      </button>
    </div>
  );
};

export default ProductDetailPage;
