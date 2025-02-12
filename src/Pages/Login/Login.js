import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Components/Firebase";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    else if (!emailPattern.test(formData.email)) newErrors.email = "Invalid email format!";
    if (!formData.password) newErrors.password = "Password is required!";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) handleLogin();
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      Swal.fire("Success!", "Login Successful", "success");
      console.log("User Logged In:", userCredential.user);
      setFormData({ email: "", password: "" });
      setErrors({});
    } catch (error) {
      console.log("Firebase Error:", error);
      let errorMessage = "Something went wrong. Please try again.";
      if (error.code === "auth/user-not-found") errorMessage = "No account found. Please sign up.";
      else if (error.code === "auth/wrong-password") errorMessage = "Incorrect password.";
      else if (error.code === "auth/invalid-email") errorMessage = "Invalid email format.";
      Swal.fire("Error!", errorMessage, "error");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 px-4">
        {/* Icon */}
        <div className="text-7xl font-bold text-white mb-6">
          <FaPeopleGroup />
        </div>

        {/* Login Form */}
        <form className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-5">Login Form</h2>

          {/* Email Field */}
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md shadow-sm">
            <BsFillPersonFill className="text-gray-500" />
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-gray-800"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

          {/* Password Field */}
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md shadow-sm mt-4">
            <FaLock className="text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-gray-800"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

          {/* Login Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all mt-6"
            type="submit"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?
            <Link to="/signup">
              <span className="font-bold hover:underline text-blue-500"> Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
