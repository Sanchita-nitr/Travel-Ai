"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const navigate = (route: string) => {
    router.push(route);
  };

  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="/bg6.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
        priority
      />

      {/* Form Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 font-serif">
        <div className="bg-black/50 p-8 rounded-lg shadow-xl w-full max-w-lg backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Create Account</h1>
          
          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-200">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="pt-4">
              <button
                type="button"
                onClick={() => navigate("/2ndpage")}
                className="w-full py-3 bg-sky-900 text-white rounded-md hover:bg-sky-950 transition duration-300 font-medium shadow-md"
              >
                Create Account
              </button>
            </div>
            
            <div className="text-center text-lg text-gray-300 mt-4">
              Already have an account?{" "}
              <button
                  type="button"
                  onClick={() => navigate("/auth/login")}
                  className="text-sm text-sky-100 hover:text-sky-300"
                >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;