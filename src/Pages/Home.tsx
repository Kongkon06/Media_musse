import { Appbar } from '../Components/Appbar'
import { Hero } from '../Components/Hero'

function Home() {

  return <div className=''>
      <Appbar/>
      <div className='h-[60vh]'>
      <Hero/>
      </div>
     <div className='text-xl my-8 flex justify-center'>
      Best selling
     </div>
     <section>
     <div className='flex px-6 flex gap-8 justify-center'>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
     </div>
     </section>
     <section >
      <div className='flex justify-center text-xl my-8'>Our Brands</div>
      <div className='flex px-6 flex gap-8 justify-center'>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
     </div>
     </section>
     <section>
        <div className='my-8 text-xl flex justify-center'>Sale</div>
        <div className='flex px-6 flex gap-8 justify-center'>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      <div className='h-36 bg-slate-400 w-28'></div>
      </div>
     </section>
     <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation Links */}
                <div className='flex flex-col items-center'>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className='flex flex '>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p>123 Music Avenue</p>
                    <p>City, State, 12345</p>
                    <p>Email: info@musicalstore.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>

                {/* Social Media Icons */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.56v14.88c0 2.53-2.05 4.56-4.56 4.56H4.56C2.03 24 0 21.95 0 19.44V4.56C0 2.03 2.05 0 4.56 0h14.88C21.97 0 24 2.05 24 4.56zM9.53 20.5v-8.99H6.99v-3.25h2.54V6.21c0-2.25 1.38-3.48 3.4-3.48.97 0 1.99.18 1.99.18v2.12h-1.12c-1.1 0-1.44.68-1.44 1.38v1.68h2.89l-.46 3.25h-2.43v8.99h-3.02z"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.49 5.64c-.82.37-1.71.61-2.64.72.95-.57 1.68-1.47 2.02-2.54-.88.52-1.86.9-2.92 1.1-.83-.88-2.01-1.43-3.32-1.43-2.52 0-4.57 2.06-4.57 4.57 0 .36.04.72.12 1.06C7.69 8.09 4.07 6.13 1.64 3.16c-.4.68-.63 1.47-.63 2.31 0 1.6.81 3.01 2.05 3.84-.75-.02-1.46-.23-2.08-.57v.06c0 2.24 1.59 4.1 3.7 4.52-.39.11-.8.16-1.22.16-.3 0-.6-.03-.89-.09.61 1.92 2.38 3.32 4.47 3.36-1.64 1.29-3.71 2.07-5.96 2.07-.39 0-.77-.02-1.15-.07 2.13 1.36 4.65 2.15 7.36 2.15 8.83 0 13.65-7.31 13.65-13.64 0-.21 0-.43-.01-.64.94-.68 1.76-1.52 2.41-2.48z"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.56v14.88c0 2.53-2.05 4.56-4.56 4.56H4.56C2.03 24 0 21.95 0 19.44V4.56C0 2.03 2.05 0 4.56 0h14.88C21.97 0 24 2.05 24 4.56zM9.53 20.5v-8.99H6.99v-3.25h2.54V6.21c0-2.25 1.38-3.48 3.4-3.48.97 0 1.99.18 1.99.18v2.12h-1.12c-1.1 0-1.44.68-1.44 1.38v1.68h2.89l-.46 3.25h-2.43v8.99h-3.02z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p>&copy; 2025 Musical Instruments Store. All rights reserved.</p>
            </div>
        </footer>
  </div>
}

export default Home
