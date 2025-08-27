import React, { useState } from "react";

const PricingSection = () => {
  const [cupsPerMonth, setCupsPerMonth] = useState(10);

  
  const dailyPrice = Math.round(2000 * cupsPerMonth / 50);
  const loverPrice = Math.round(3500 * cupsPerMonth / 50);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-yellow-50/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Choose Your Matcha Plan
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Enjoy authentic Japanese matcha, tailored to your lifestyle. 
          Adjust your monthly servings and see your perfect plan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition">
            <h3 className="text-xl text-green-700 mb-4">Daily Ritual</h3>
            <p className="text-3xl font-bold text-green-900 mb-6">
              ${dailyPrice}/mo
            </p>
            <p className="text-gray-600 text-sm">
              Perfect for beginners—smooth matcha to energize your mornings.
            </p>
          </div>

          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition">
            <h3 className="text-xl text-green-700 mb-4">Tea Lover’s Plan</h3>
            <p className="text-3xl font-bold text-green-900 mb-6">
              ${loverPrice}/mo
            </p>
            <p className="text-gray-600 text-sm">
              For true matcha enthusiasts—ample servings for your daily ritual.
            </p>
          </div>

          
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <div className="max-w-xl w-full">
              <p className="text-center text-gray-700 mb-4">
                {cupsPerMonth} Cups per Month
              </p>

              <div className="relative px-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-gray-600">10</span>
                  <input
                    className="flex-1 h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    type="range"
                    min="10"
                    max="50"
                    value={cupsPerMonth}
                    onChange={(e) =>
                      setCupsPerMonth(parseInt(e.target.value))
                    }
                  />
                  <span className="text-xs sm:text-sm text-gray-600">50</span>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                Adjust the number of cups to see your plan pricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
