import React from "react";
import BenifitsImage from "../assets/Benifit.png";
import { FaArrowRightLong } from "react-icons/fa6";

const BenefitsSection = () => {
  return (
    <section id="health" className="w-full bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          <div className="md:w-1/2 w-full">
            <img src={BenifitsImage} alt="Beinifit Image" className="w-full h-auto" />
          </div>

          <div className="md:w-1/2 w-full">
            <p className="text-orange-500 font-semibold">MATCHA LIFESTYLE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-6">
              Elevate Your Day With <br /> Premium Japanese Matcha
            </h2>
            <p className="text-gray-600 mb-8">
              Take a mindful pause and invigorate your day naturally with our shade-grown Japanese matcha. Each sip is a ritual of calm energy, combining centuries-old tradition with modern wellness. Rich in antioxidants, amino acids, and chlorophyll, matcha supports mental clarity, sustained focus, and overall vitality. Whether you start your morning, power through work, or enjoy a quiet afternoon, our matcha provides a gentle lift without the jitters of coffee. Beyond energy, it promotes relaxation, enhances metabolism, and nourishes your skin from within. Indulge in the subtle umami flavor and vibrant green color that transforms everyday moments into mindful experiences. Perfect for tea enthusiasts, wellness seekers, or anyone looking to embrace a balanced lifestyle, our premium Japanese matcha is a harmonious blend of taste, tradition, and wellbeing.
            </p>
            <a href="#" className="text-green-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
              Explore Matcha Health Benefits <FaArrowRightLong className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
