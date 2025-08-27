import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Our Matcha Journey", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Wholesale", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  shop: [
    { name: "Matcha Powder", href: "#" },
    { name: "Tea Sets", href: "#" },
    { name: "Whisk & Accessories", href: "#" },
    { name: "Gift Boxes", href: "#" },
    { name: "Subscriptions", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Brewing Guide", href: "#" },
    { name: "Shipping & Returns", href: "#" },
    { name: "Matcha Benefits", href: "#" },
    { name: "Customer Care", href: "#" },
  ],
  contact: [
    { name: "WhatsApp", href: "#" },
    { name: "hello@zenmatcha.com", href: "#" },
    { name: "+94 77 123 4567", href: "#" },
  ],
};

const Footer = () => {
  return (
    <motion.footer 
    variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView="show"
    
    className="bg-gradient-to-b from-green-200 to-yellow-100/80 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/matcha-latte.png"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-green-800">
                Zen Tea Garden
              </span>
            </div>
            <p className="text-gray-700 mb-6 md:w-3/4 leading-relaxed">
              Experience the perfect blend of calm and energy with our premium
              Japanese Matcha. Packed with antioxidants and crafted for
              everyday wellness, Zen Tea Garden brings you a mindful pause in
              every sip. Perfect for mornings, workdays, or relaxing rituals.
            </p>

            
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4 text-green-800 uppercase">
                    {category.replace(/([A-Z])/g, " $1")}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="text-gray-700 hover:text-green-700 transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-500 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm gap-3 md:gap-0">
          <p>
            &copy; {new Date().getFullYear()}. Zen Tea Garden. All rights
            reserved.
          </p>
          <p>Created By Imalka Sewwandi</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
