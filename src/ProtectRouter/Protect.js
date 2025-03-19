// import { Navigate, Outlet } from "react-router-dom";

// // Function to check authentication
// const isAuthenticated = () => {
//   return localStorage.getItem("token") !== null; // Replace with secure authentication check
// };

// // Protected Route Component
// const ProtectedRoute = () => {
//   return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
// };

// export default ProtectedRoute;

import { Navigate,Outlet } from "react-router-dom";
 
const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
};

const Protect = () => {
     return isAuthenticated() ? <Outlet /> : <Navigate to='/' />;
};

export default Protect;