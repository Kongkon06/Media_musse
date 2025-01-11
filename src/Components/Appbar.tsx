import { useNavigate } from "react-router-dom"

export const Appbar = ()=>{
    const navigate = useNavigate();
    return (
        <nav className="bg-blue-700 p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img src="logo.png" alt="Logo" className="h-10" />
                </div>
                {/* Categories and Offline Buy */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" onClick={()=>navigate('/Categories')} className="text-white hover:text-yellow-500">Categories</a>
                    <a href="Agent" className="text-white hover:text-yellow-500">Offline Buy</a>
                </div>
                {/* Search Bar */}
                <div className="flex-grow mx-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search for musical instruments..." 
                            className="w-full px-4 py-2 rounded-lg mr-2 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4a6 6 0 0110.39 4.2 6 6 0 01-5.39 5.8M16 16l4 4" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Login Button */}
                <div>
                    <a href="#" className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">Login</a>
                </div>
            </div>
        </nav>
    );
}