import React, { useState } from 'react';
import { FaUserEdit } from "react-icons/fa";
import { BsPersonFill, BsLockFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Newsign() {

  const [formData,setFormData] = useState({
    username : "",
    password : "",
    confirmpassword : "",
  });

  const [errors,setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if(!formData.username.trim()) {
      newErrors.username = "Username must be required!";
    }
    if(!formData.password) {
      newErrors.password = "Password is required!";
    }
    else if(formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
    }
    if(!formData.confirmpassword) {
      newErrors.confirmpassword = "Conform password is required!";
    }
    else if(formData.confirmpassword !== formData.password) {
      newErrors.confirmpassword = "Password does not match"
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if(validate()){
        alert("User Created Successfully");
        setFormData({username :"",password :"",confirmpassword:""});
      }
  } 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 ">
      {/* Icon */}
      <div className="text-6xl text-white mb-6">
        <FaUserEdit />
      </div>

      {/* Signup Form */}
      <form className="bg-white p-8 rounded-2xl shadow-xl w-96 space-y-5  ">
        <h2 className="text-2xl font-bold text-center text-gray-700">Create an Account</h2>

        {/* Username Field */}
        <div className="flex items-center border rounded-lg p-3 shadow-sm mt-5">
          <BsPersonFill className="text-gray-500" />
          <input
            type="text"
            placeholder="Username"
            className="w-full outline-none pl-3 text-gray-700"
            onChange={(e) => setFormData({...formData,username : e.target.value})}
          />
        </div>
        {errors.username && (
          <p className='text-red-500 text-sm mt-1'>{errors.username}</p>
        )}

        {/* Password Field */}
        <div className="flex items-center border rounded-lg p-3 shadow-sm">
          <BsLockFill className="text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none pl-3 text-gray-700"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        {errors.password && (
          <p className='text-red-500 text-sm mb-2'>{errors.password}</p>
        )}

        {/* Confirm Password Field */}
        <div className="flex items-center border rounded-lg p-3 shadow-sm">
          <BsLockFill className="text-gray-500" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full outline-none pl-3 text-gray-700"
            onChange={(e) => setFormData({...formData, confirmpassword:e.target.value})}
          />
        </div>
        {errors.confirmpassword && (
          <p className='text-red-500 text-sm'>{errors.confirmpassword}</p>
        )}

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition"
          onClick={handleSubmit}
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-3">
          Already have an account? <Link to='/loginin'><a href="#" className="text-blue-500 font-semibold hover:underline">Login</a></Link>
        </p>
      </form>
    </div>
  );
}

export default Newsign;
