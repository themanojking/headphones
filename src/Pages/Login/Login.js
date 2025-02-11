import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

function Login() {

    const[formData,setFormData] = useState({
      username :"",
      password :"",
    });

    const [errors,setErros] = useState({});

    const validate = () => {
      let newErrors = {};
      if(!formData.username.trim()){
        newErrors.username = "Username is required!";
      }
      if(!formData.password) {
        newErrors.password = "Password is required!";
      }
       else if (formData.password.length < 6){
        newErrors.password = "Password must be at least 6 characters!";
       }
       setErros(newErrors);
       return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
          alert("Login Successfull");
          setFormData({username :"",password : ""});
          setErros({});
        }
    };

    



  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 ">
        <div className="text-7xl font-bold text-white mb-6">
          <FaPeopleGroup />
        </div>
        <form className="bg-white p-8 rounded-lg shadow-xl mt-5 w-80">
          <h2 className="text-2xl font-bold text-center text-gray-700">Login Form</h2>
          {/* Username Field */}
          <div className="flex items-center gap-2 bg-white p-3 rounded-md  shadow-lg mt-5">
            <BsFillPersonFill className="text-gray-500" />
            <input 
              type="text" 
              placeholder="Username" 
              className=" outline-none w-full px-2 "
              onChange={(e) => setFormData({...formData,username : e.target.value})}
            />
          </div>
          {errors.username && (
            <p className="text-red-400 text-sm mt-1 ">{errors.username}</p>
          )}

          {/* Password Field */}
          <div className="">
          <div className="flex items-center gap-2 bg-white p-3 rounded-md mt-5 shadow-lg ">
            <FaLock className="text-gray-500" />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-transparent outline-none w-full px-2"
              onChange={(e) => setFormData({...formData,password : e.target.value})}
            />
          </div>
          </div>
          {errors.password && (
            <p className="text-red-400 text-sm mt-1 ">{errors.password}</p>
          )}

          {/* Login Button */}
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition mt-10" 
          type="submit"
          onClick={handleSubmit}>
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-600 mt-3">
            Don't have an account? 
            <Link to='/signup'> <a href="#" className="font-bold hover:underline text-blue-500"> Sign Up</a></Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
