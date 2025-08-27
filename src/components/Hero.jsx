import React from 'react';
import heroImage from '../assets/hero-image.png';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
    return (
        <section id="home" className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px'>

            <div className='w-full md:w-1/2 space-y-8'>

            <motion.div
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            whileInView="show"
            >

                <div className='flex items-center gap-2 bg-green-100/40 w-fit px-4 py-2 rounded-full hover:bg-green-100/90 transition-colors cursor-pointer group border border-green-500'>
                <span className='text-green-500 group-hover:scale-110 transition-transform'>🍵</span>
                <span className='text-sm font-medium'>Awaken Your Senses with Matcha</span>
                </div>
            </motion.div>

            <motion.h1
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show" 
            className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                Experience calm focus and energy through authentic <span className='text-green-500 relative inline-block'>Japanese matcha tea 
                <span className='inline-block ml-2 animate-pulse'>🍵</span></span></motion.h1>

            <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            className='text-gray-500 text-lg md:text-xl max-w-3xl'>
                From passionate tea lovers to health-conscious lifestyle enthusiasts, discover the true power of matcha — a superfood rich in antioxidants, delivering sustained natural energy, enhanced focus, and a calming balance for both body and mind in every sip.</motion.p>

            <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show" 
            className='flex gap-2 max-w-md'>
                <input type="email" placeholder="Enter your email" className='border border-green-500 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500' />
                <button className='bg-green-500 text-black  rounded-xl py-2 px-4 hover:bg-green-600 transition-colors'>➤</button>
            </motion.div>

            </div>


            <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-40'>
            <div className='relative'>
                <img src={heroImage} alt="hero image" className='rounded-lg relative z-10 hover:scale-[1.05] transition-transform duration-300' />
            </div>

            </motion.div>
        </section>
    )
}

export default Hero;