import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, User, Lock } from 'lucide-react';

interface FormData {
    username: string;
    email: string;
    password: string;
}

interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
}

export function Auth() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const navigate = useNavigate();

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }
        if (isSignIn && !formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (isSignIn && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false);
            navigate("/");
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

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

            <div className="w-96 max-w-md bg-white rounded-2xl shadow-xl backdrop-blur-sm">
                <div className="p-6 sm:p-8">
                    {/* Auth Type Toggle */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-slate-100 p-1 rounded-lg">
                            <button
                                type="button"
                                onClick={() => setIsSignIn(true)}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                    isSignIn 
                                    ? 'bg-white text-slate-900 shadow-sm' 
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Sign Up
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsSignIn(false)}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                    !isSignIn 
                                    ? 'bg-white text-slate-900 shadow-sm' 
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Log In
                            </button>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-center mb-8">
                        {isSignIn ? 'Create your account' : 'Welcome back'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm border ${
                                        errors.username 
                                        ? 'border-red-500 focus:ring-red-200' 
                                        : 'border-slate-200 focus:ring-blue-200'
                                    } focus:outline-none focus:ring-2 transition-colors`}
                                />
                            </div>
                            {errors.username && (
                                <p className="mt-1 text-xs text-red-500">{errors.username}</p>
                            )}
                        </div>

                        {isSignIn && (
                            <div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm border ${
                                            errors.email 
                                            ? 'border-red-500 focus:ring-red-200' 
                                            : 'border-slate-200 focus:ring-blue-200'
                                        } focus:outline-none focus:ring-2 transition-colors`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                                )}
                            </div>
                        )}

                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-12 py-2.5 rounded-lg text-sm border ${
                                        errors.password 
                                        ? 'border-red-500 focus:ring-red-200' 
                                        : 'border-slate-200 focus:ring-blue-200'
                                    } focus:outline-none focus:ring-2 transition-colors`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                isSignIn ? 'Create account' : 'Sign in'
                            )}
                        </button>

                        <div className="text-center text-sm text-slate-600">
                            {isSignIn ? (
                                <p>
                                    Already have an account?{' '}
                                    <button
                                        type="button"
                                        onClick={() => setIsSignIn(false)}
                                        className="text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Sign in
                                    </button>
                                </p>
                            ) : (
                                <p>
                                    Don't have an account?{' '}
                                    <button
                                        type="button"
                                        onClick={() => setIsSignIn(true)}
                                        className="text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Create one
                                    </button>
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;