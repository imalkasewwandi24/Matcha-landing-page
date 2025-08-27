import React from 'react';
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn} from "../utils/motion";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    {href: '#home', label: 'Home'},
    {href: '#about', label: 'About Us'},
    {href: '#products', label: 'Our Products'},
    {href: '#health', label: 'Health Benefits'},
    {href: '#testimonials', label: 'Testimonials'},
  ]

  return (
   <motion.nav
   variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}

   className='fixed top-0 left-0 right-0 bg-green-100/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
    <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
      
      <div className='flex items-center gap-2 cursor-pointer'>
        <img src="/matcha-latte.png"  alt="Logo" className="w-8 h-8 object-contain" />
      </div>



      
       <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
        {
          isMenuOpen ? <HiX className='size-6'/> : <HiMenu className='size-6'/>
        }

       </button>



     
      <div className='hidden md:flex items-center gap-10'>
        {
          navLinks.map((link, index) => (
            <a key={index} href={link.href}
            onClick={() => setActiveLink(link.href)} 
            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-600 after:transition-all ${activeLink === link.href ? "text-green-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>
              {link.label}
            </a>
          ))
        }
      </div>



      
      <button className='hidden md:block items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300'>
        <a href="https://wa.me/94740068902?text=Hello%21%20I%20want%20to%20get%20in%20touch.">Get in Touch</a>
      </button>


      
      

    </div>

    {/*Mobile MenuItems*/}
      {
        isMenuOpen && (
          <div className='md:hidden bg-green-100/90 border-t border-gray-100 py-4'>
            <div className='container mx-auto px-4 space-y-3'>
              {navLinks.map((link,index) =>(
                <a
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-green-600" : "text-gray-600 hover:text-gray-900"}`} href={link.href}>{link.label}</a>
              ))}

              <button className='w-full items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300'>
                <a href="#newsletter">Get in Touch</a>
              </button>
            </div>
          </div>          

        )
      }
   </motion.nav>
  )
}

export default Navbar
