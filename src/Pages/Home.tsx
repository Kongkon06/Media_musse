import { Appbar } from '../Components/Appbar'
import Footer from '../Components/Footer';
import { Hero } from '../Components/Hero'
import Deals, {  } from "./Deals";
function Home() {

  return <div className='relative pt-16'>
      <Appbar/>
      <div className='h-[60vh]'>
      <Hero/>
      </div>
     <div className='text-xl my-8 flex justify-center'>
      Best selling
     </div>
     <section>
     <div className='flex px-6 gap-8 justify-center'>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
     </div>
     </section>
     <section >
      <div className='flex justify-center text-xl my-8'>Our Brands</div>
      <div className='flex px-6 gap-8 justify-center'>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
     </div>
     </section>
     <section>
        <Deals/>
      
     </section>
    <Footer/>
  </div>
}

export default Home
