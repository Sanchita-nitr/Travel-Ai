"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const navigate = (route: string) => {
    router.push(route);
  };

  const handleSubmit = () => {
    // Password reset request logic would go here
    setIsSubmitted(true);
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
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Forgot Password</h1>
          
          {!isSubmitted ? (
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
                <p className="text-gray-300 text-sm mt-2">
                  Enter the email address associated with your account and we &apos;ll send you a link to reset your password.
                </p>
              </div>
              
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full py-3 bg-sky-900 text-white rounded-md hover:bg-sky-950 transition duration-300 font-semibold shadow-md text-lg"
                >
                  Submit
                </button>
              </div>
              
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => navigate("/auth/login")}
                  className="text-sky-100 hover:text-sky-300 text-base"
                >
                  Back to Login
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="bg-green-500/20 p-3 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Email Sent</h2>
              <p className="text-gray-300 mb-6">
                We &apos;ve sent a password reset link to <span className="font-semibold">{email}</span>. Please check your inbox.
              </p>
              <div className="flex flex-col space-y-4">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-sky-100 hover:text-sky-300"
                >
                  Try another email
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/auth/login")}
                  className="text-sm text-sky-100 hover:text-sky-300"
                >
                  Return to login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;