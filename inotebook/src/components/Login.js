import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Loading from "./Loading";
import { LogIn } from "lucide-react";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });

      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        navigate("/");
        toast.success("Logged in successfully");
      } else {
        toast.error("Invalid credentials, please try again");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="flex-grow bg-cover bg-center flex justify-center items-center px-4"
      style={{
        backgroundImage: "url('/images/clouds.png')",
        minHeight: "calc(100vh - 32px - 10px)", 
      }}
    >
      <div className="relative max-w-3xl w-full flex items-center justify-center">
        {/* Login Card */}
        <div className="relative backdrop-blur-xl p-4 rounded-xl shadow-l z-10 w-full max-w-md">
          <LogIn className="mx-auto mb-3 h-12 w-10 text-black" />
          <h2 className="text-2xl text-center font-bold text-gray-950 mb-2">
            Login to continue to iNotebook
          </h2>
          <p className="text-sm text-center text-blue-950 italic mb-4">
            Your ideas deserve more than sticky notes. Welcome back.
          </p>
          {loading ? (
            <Loading />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-950">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={credentials.email}
                  onChange={onChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-accent focus:outline-none"
                  aria-describedby="emailHelp"
                />
                <p className="text-xs text-blue-950 mt-1">We'll never share your email with anyone else.</p>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-950">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={credentials.password}
                  onChange={onChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-gradient text-white py-3 px-5 rounded-md transition duration-200"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
