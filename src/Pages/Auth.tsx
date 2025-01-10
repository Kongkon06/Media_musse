// SignInLogin.js
import { useState } from 'react';

export function Auth() {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <button
                        className={`px-4 py-2 rounded-l-lg ${isSignIn ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setIsSignIn(true)}
                    >
                        Sign In
                    </button>
                    <button
                        className={`px-4 py-2 rounded-r-lg ${!isSignIn ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setIsSignIn(false)}
                    >
                        Log In
                    </button>
                </div>
                {isSignIn ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                        <form>
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
                        <form>
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
