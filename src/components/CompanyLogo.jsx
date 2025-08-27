import React from 'react';
import eco from '../assets/eco-friendly.png';
import health from '../assets/healthcare.png';
import certificate from '../assets/certificate.png';
import vegan from '../assets/vegan-food.png';
import natural from '../assets/natural-food.png';

const CompanyLogo = () => {
    const logos = [eco, health, certificate, vegan, natural];
    return (
        <div className='w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start'>
            <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-green-500 bg-white py-2 z-10
            sm:text-base text-xl font-semibold text-left'>Trusted by Matcha Lovers & <br />Wellness Communities Worldwide</div>


            <div className='flex animate-marquee whitespace-nowrap'>
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="company logo" className='mx-12 h-10 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300' />
                ))}


                {logos.map((logo, index) => (
                    <img key={`duplicate-${index}`} src={logo} alt="company logo" className='mx-12 h-12 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300' />
                ))}


            </div>




        </div>
    );
}

export default CompanyLogo;
