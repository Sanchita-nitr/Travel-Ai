"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const navigate = (route: string) => {
    router.push(route);
  };

  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="/loginbg.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
        priority
      />

      {/* Form Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 font-serif">
        <div className="bg-black/50 p-8 rounded-lg shadow-xl w-full max-w-md backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Login</h1>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
                <button 
                  type="button" 
                  className="text-sm text-sky-100 hover:text-sky-300"
                  onClick={() => navigate("/auth/forgot-password")}
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-sky-900 focus:ring-sky-800 border-gray-600 rounded bg-black/30"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-200">
                Remember me
              </label>
            </div>
            
            <div className="pt-4">
              <button
                type="button"
                onClick={() => navigate("/2ndpage")}
                className="w-full py-3 bg-sky-900 text-white rounded-md hover:bg-sky-950 transition duration-300 font-semibold shadow-md text-lg"
              >
                Log In
              </button>
            </div>
            
            <div className="text-center text-lg text-gray-300 mt-6">
              Don &apos;t have an account?{" "}
              <button 
                onClick={() => navigate("/auth/signup")} 
                className="text-sky-100 hover:text-sky-300 text-lg"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;