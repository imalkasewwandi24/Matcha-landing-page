import React from "react";
import matcha1 from "../assets/matcha1.png";
import matcha2 from "../assets/matcha2.png";
import matcha3 from "../assets/matcha3.png";

const features = [
  {
    image: matcha1,
    title: "Ceremonial Matcha",
    description: "Our highest-grade matcha, perfect for tea ceremonies or mindful moments. Smooth, vibrant, and rich in umami.",
  },
  {
    image: matcha2,
    title: "Daily Energy Matcha",
    description: "Crafted for busy mornings and workdays, this blend delivers steady energy and calm focus without the jitters.",
  },
  {
    image: matcha3,
    title: "Culinary Matcha",
    description: "Blend into lattes, smoothies, or desserts — a versatile matcha full of antioxidants and flavor for everyday creations.",
  },
];

const Products = () => {
  return (
    <section id="products" className="max-w-7xl mx-auto px-4 py-20">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
          Which Matcha is right for you?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover our premium Japanese matcha blends, each crafted for a unique
          purpose and lifestyle.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-8 rounded-2xl bg-green-100/60 border border-black shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-60 h-60 mb-6 overflow-hidden rounded-xl shadow-lg">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-center text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

     
      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white cursor-pointer py-3 px-10 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
          Shop Matcha Blends
        </button>
      </div>
    </section>
  );
};

export default Products;
