// SignInLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Auth() {
    const [isSignIn, setIsSignIn] = useState(true);
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/sigin.jpg"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-4">
            <div className='flex justify-center'>
                {isSignIn ? ( <div>
                    Don't have a account?
                    <button className='underline text-blue-400 ml-1' onClick={()=>setIsSignIn(false)}>Sign in</button>
                </div>) : (<div>
                    Already have an account?
                    <button className='underline text-blue-400 ml-1' onClick={()=>setIsSignIn(true)}>Log in</button>
                </div>) }
            </div>
        </div>

        {/* Conditional Rendering for Forms */}
        {isSignIn ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Log In
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
    );
}
