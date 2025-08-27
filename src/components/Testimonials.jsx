import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Matcha has completely transformed my mornings. Instead of the crash I used to get from coffee, I now feel steady energy that lasts all day. It’s become a daily ritual that keeps me focused and refreshed.",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "I love how natural and pure the matcha tastes. It helps me stay calm during stressful workdays while giving me the focus I need. It feels like I’m taking care of both my body and mind with every sip.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "Drinking matcha feels like a mindful pause in my routine. Not only does it boost my energy, but it also gives me a sense of balance. It’s more than a drink — it’s part of my wellness lifestyle.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Since I started drinking matcha, my afternoons feel lighter and more productive. The gentle energy keeps me motivated without jitters, and it has become my favorite part of the day.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Matcha has made my mornings feel intentional. Each cup is calming yet invigorating, helping me focus on my work and mindfulness practices. I can’t imagine starting my day without it.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "I appreciate how matcha supports my wellness routine. It’s soothing, energizing, and a natural way to stay alert. Every sip feels like a small self-care ritual that benefits both mind and body.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 max-w-7xl mx-auto relative">
      
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold bg-black bg-clip-text text-transparent mb-4">
          What Our Matcha Lovers Say
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Real experiences from people who made matcha part of their daily
          rituals. Discover how matcha inspires calm focus, energy, and
          well-being.
        </p>
      </div>

     
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        className="testimonials-swiper pb-12"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="group text-center p-8 shadow-lg rounded-2xl bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full border-4 border-green-400 group-hover:border-green-600 transition-colors duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                “{testimonial.text}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
      <div className="flex justify-center gap-6 mt-10">
        <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-green-500 hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer">
          <BsChevronLeft className="size-6" />
        </button>
        <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-green-500 hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer">
          <BsChevronRight className="size-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
