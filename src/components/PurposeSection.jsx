import React from 'react';

const PurposeSection = () => {

const features = [
    {
      icon: "🌿", 
      title: "Whisked for Wellness",
      description: "We bring you hand-picked, shade-grown matcha sourced from Japan, rich in antioxidants and crafted to elevate your daily rituals."
    },
    {
      icon: "🍃", 
      title: "Crafted for Balance",
      description: "From morning boosts to mindful moments, our blends adapt to your lifestyle, giving you clarity, focus, and natural energy without the crash."
    }
    
  ];

const features2 = [
    {
      icon: "🍵",
      title: "Mindful Rituals",
      description: "Enjoy matcha your way—whether as a calming tea, a creamy latte, or a refreshing iced blend for busy mornings."
    },
    {
      icon: "🌿", 
      title: "Sustainable Sourcing",
      description: "Our farmers follow time-honored traditions, ensuring every leaf is grown with respect for nature and community well-being."
    }
    
  ];

const features3 = [
    {
      icon: "💚", 
      title: "Naturally Nourishing",
      description: "Packed with vitamins and minerals, matcha supports immunity, digestion, and inner balance in every sip."
    },
    {
      icon: "✨", 
      title: "Mindful Moments",
      description: "Slow down and savor—our matcha is crafted to transform simple routines into rituals of focus and presence."
    }
    
  ];

    return (
        <section id="about" className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                <div className='mt-35'>
                    <p className='text-sm text-green-500 font-medium mb-2'>DISCOVER MATCHA</p>
                    <h2 className='text-3xl md:4/5 w-full md:text-4xl font-bold text-gray-500'>Experience the pure energy and calm focus of matcha</h2>
                </div>

                <div className='col-span-2 grid md:grid-cols-2 grid-cols-1 justify-between gap-8'>
                    {
                        features.map((feature, index) => (
                            <div key={index} className='flex items-start space-x-4'>
                                <div className='w-15 h-15 flex items-center justify-start '>{feature.icon}</div>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                                    <p className='text-gray-600'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    {
                        features2.map((feature, index) => (
                            <div key={index} className='flex items-start space-x-4'>
                                <div className='w-15 h-15 flex items-center justify-start '>{feature.icon}</div>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                                    <p className='text-gray-600'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    {
                        features3.map((feature, index) => (
                            <div key={index} className='flex items-start space-x-4'>
                                <div className='w-15 h-15 flex items-center justify-start '>{feature.icon}</div>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                                    <p className='text-gray-600'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                

                
                </div>
            </div>
        </section>
    );
}

export default PurposeSection;
