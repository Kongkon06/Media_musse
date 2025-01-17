import { Appbar } from '../Components/Appbar'
import Footer from '../Components/Footer';
import { Hero } from '../Components/Hero'
import { BestSelling } from "../Components/BestSelling";
import { Brand } from "../Components/Brand";
import Deals, {  } from "./Deals";
function Home() {

  return <div className='min-h-screen bg-gradient-to-br from-deal-purple/5 to-deal-orange/5 relative pt-16'>
      <Appbar/>
      <Hero/>
     <BestSelling/>
     <Brand/>
     <Deals/>
    <Footer/>
  </div>
}

export default Home

