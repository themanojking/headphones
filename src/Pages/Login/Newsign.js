import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { BsPersonFill, BsLockFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Components/Firebase";
import { HiEye } from "react-icons/hi2";
import { HiEyeOff } from "react-icons/hi";

function Newsign() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [showPass,setShowPass] = useState(false);
  const [showConPass,setConPass] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    else if (!emailPattern.test(formData.email))
      newErrors.email = "Invalid email format!";
    if (!formData.password) newErrors.password = "Password is required!";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters!";
    if (!formData.confirmpassword)
      newErrors.confirmpassword = "Confirm password is required!";
    else if (formData.confirmpassword !== formData.password)
      newErrors.confirmpassword = "Passwords do not match!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User Registered Successfully:", userCredential.user);
      Swal.fire("Success!", "User Created Successfully!", "success");
      setFormData({ email: "", password: "", confirmpassword: "" });
      navigate("/loginin");
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);
      let errorMessage = "Something went wrong!";
      if (error.code === "auth/email-already-in-use")
        errorMessage = "This email is already in use. Please try logging in.";
      else if (error.code === "auth/invalid-email")
        errorMessage = "Invalid email format!";
      else if (error.code === "auth/weak-password")
        errorMessage = "Password should be at least 6 characters!";
      Swal.fire("Error!", errorMessage, "error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) handleRegister();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 px-4">
      <div className="text-6xl text-white mb-6">
        <FaUserEdit />
      </div>

      <form
        className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Create an Account
        </h2>

        {/* Email Field */}
        <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm">
          <BsPersonFill className="text-gray-500" />
          <input
            type="text"
            placeholder="Email"
            className="w-full bg-transparent outline-none pl-3 text-gray-700"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Password Field */}
        <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm">
          <BsLockFill className="text-gray-500" />
          <input
            type={showPass ? "text" : "password"  }
            placeholder="Password"
            className="w-full bg-transparent outline-none pl-3 text-gray-700"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button type="button" onClick={() => setShowPass(!showPass)} className="text-2xl">
            {showPass ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        {/* Confirm Password Field */}
        <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm">
          <BsLockFill className="text-gray-500" />
          <input
            type={showConPass ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full bg-transparent outline-none pl-3 text-gray-700"
            value={formData.confirmpassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmpassword: e.target.value })
            }
          />
           <button type="button" onClick={() => setConPass(!showConPass)} className="text-2xl">
            {showConPass ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
        {errors.confirmpassword && (
          <p className="text-red-500 text-sm">{errors.confirmpassword}</p>
        )}

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-3">
          Already have an account?{" "}
          <Link to="/loginin">
            <span className="text-blue-500 font-semibold hover:underline">
              Login
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Newsign;
