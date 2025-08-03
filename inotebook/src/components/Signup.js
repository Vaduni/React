import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Loading from "./Loading";
import { UserPlus } from "lucide-react";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authToken);
        navigate("/");
        toast.success("Account created successfully");
      } else {
        toast.error("Invalid details, please try again");
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
        minHeight: "calc(100vh - 45px - 12px)", 
      }}
    >
      <div className="relative max-w-3xl w-full flex items-center justify-center">
        {/* Signup Card */}
        <div className="relative backdrop-blur-xl p-4 rounded-xl shadow-l z-10 w-full max-w-md mt-10 mb-2">
          <UserPlus className="mx-auto mb-2 h-10 w-10 text-black" />
          <h2 className="text-2xl text-center font-bold text-gray-950 mb-2">
            Create an account to use iNotebook
          </h2>
          <p className="text-sm text-center text-blue-950 italic mb-4">
            Your ideas deserve more than sticky notes.
          </p>

          {loading && <Loading />}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={onChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={onChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-accent"
              />
              <p className="text-xs text-gray-500 mt-1">We'll never share your email with anyone else.</p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={onChange}
                minLength={5}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-accent"
              />
            </div>

            <div>
              <label htmlFor="cpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                onChange={onChange}
                minLength={5}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-accent"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-5 bg-brand-gradient text-white font-semibold rounded-md transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
