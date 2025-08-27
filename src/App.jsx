
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import Products from './components/Products'
import BenefitsSection from './components/BenefitsSection'
import PricingSection from './components/PricingSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


function App() {
  

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -right-28 w-[1000px] h-[2200px] bg-gradient-to-tr from-green-100 to-yellow-100/70 rounded-full
      blur-[80px] -z-10'></div>
     <div className='overflow-hidden '>
      <Navbar/>
      <Hero/>
      <CompanyLogo/>
      <PurposeSection/>
      <Products/>
      <BenefitsSection/>
      <PricingSection/>
      <Testimonials/>
      <Footer/>

     </div>
    </main>
  )
}

export default App
