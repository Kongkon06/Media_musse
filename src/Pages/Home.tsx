import { Appbar } from '../Components/Appbar'
import Footer from '../Components/Footer';
import { Hero } from '../Components/Hero'
import { BestSelling } from "../Components/BestSelling";
import { Brands } from "../Components/Brands";
import Deals, {  } from "./Deals";
function Home() {

  return <div className='min-h-screen bg-gray-50 relative pt-16'>
      <Appbar/>
      <Hero/>
     <BestSelling/>
     <Brands/>
     <Deals/>
    <Footer/>
  </div>
}

export default Home
