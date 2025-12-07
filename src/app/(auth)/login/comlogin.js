"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-indigo-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6-6h6l-2-2h-2zm12 0h-6l2 2h2zm-2 4h-4v-4h4v4zM12 19l4-4-4-4-4 4 4 4z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11h.01"
    />
  </svg>
);

const LoginPage = () => {
  // State for form fields
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password");
  // State for UI feedback
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Please enter your email and password.");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        router.push("/#");
      } else {
        setError("Invalid credentials. Please check your email and password.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
      {/* Header Section */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <LockIcon />
        </div>
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">
          Sign In to Your Account
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Enter your details to proceed
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div
          className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg text-sm text-left"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}

      {/* Login Form (Removed dir="rtl") */}
      <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div className="rounded-md shadow-sm space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1"
            >
              Email Address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-left transition"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-left transition"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Forgot Password Link */}
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition transform hover:scale-[1.01]"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
      </form>

      {/* Footer Link */}
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition"
          >
            Create a new account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
